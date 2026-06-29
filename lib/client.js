import { makeWASocket, useMultiFileAuthState, DisconnectReason, fetchLatestBaileysVersion } from '@whiskeysockets/baileys';
import fs from 'fs';
import path from 'path';
import pino from 'pino';
import { logger } from './logger.js';
import config from '../config.js';

const log = pino({ level: 'fatal' });

export async function initializeClient() {
  const sessionPath = path.join(config.sessionFolder, 'creds');

  if (!fs.existsSync(config.sessionFolder)) {
    fs.mkdirSync(config.sessionFolder, { recursive: true });
  }

  const { state, saveCreds } = await useMultiFileAuthState(sessionPath);
  const { version } = await fetchLatestBaileysVersion();

  const smile = makeWASocket({
    version,
    logger: log,
    printQRInTerminal: false,
    auth: state,
    browser: ['Ubuntu', 'Chrome', '120'],
    syncFullHistory: false,
    getMessage: async () => new Promise(() => {}),
  });

  smile.ev.on('creds.update', saveCreds);

  smile.ev.on('connection.update', (update) => {
    const { connection, lastDisconnect, isNewLogin } = update;

    if (connection === 'connecting') {
      logger.info('Connecting to WhatsApp...');
    } else if (connection === 'open') {
      logger.success('WhatsApp Connected Successfully!');
    } else if (connection === 'close') {
      const shouldReconnect = lastDisconnect?.error?.output?.statusCode !== DisconnectReason.loggedOut;
      if (shouldReconnect) {
        logger.warn('Connection closed. Reconnecting...');
        setTimeout(() => initializeClient(), 5000);
      } else {
        logger.error('Connection closed. Session ended.');
      }
    }

    if (isNewLogin) {
      logger.success('New login detected!');
    }
  });

  return smile;
}

export default initializeClient;