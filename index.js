import express from 'express';
import chalk from 'chalk';
import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';
import config from './config.js';
import { logger } from './lib/logger.js';
import { initializeClient } from './lib/client.js';
import { requestPhoneNumber, validatePhoneNumber, displayPairingCode, closePairingPrompt } from './lib/pairing.js';
import Database from './lib/database.js';
import serialize from './lib/serializer.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
app.use(express.static('public'));
app.use(express.json());

// Database initialization
const db = new Database();

// Bot startup time
const botStartTime = Date.now();

// ASCII Art
const asciiArt = `
${chalk.cyan(`
████████╗ ██████╗ ██╗  ██╗ █████╗ ██████╗  █████╗  
╚══██╔══╝██╔═══██╗██║  ██║██╔══██╗██╔══██╗██╔══██╗ 
   ██║   ██║   ██║███████║███████║██║  ██║███████║ 
   ██║   ██║   ██║╚════██║██╔══██║██║  ██║██╔══██║ 
   ██║   ╚██████╔╝     ██║██║  ██║██████╔╝██║  ██║ 
   ╚═╝    ╚═════╝      ╚═╝╚═╝  ╚═╝╚═════╝ ╚═╝  ╚═╝

✦ ASTRA MINI BOT ✦
`)}
`;

// Display startup information
async function displayStartup() {
  console.clear();
  console.log(asciiArt);
  logger.divider();
  logger.info('Loading Configuration');
  logger.info('Loading Commands');
  logger.info('Loading Database');
  logger.info('Connecting WhatsApp');
  await new Promise(r => setTimeout(r, 1000));
  logger.success('Loading Session');
  await new Promise(r => setTimeout(r, 500));
  logger.success('Connected Successfully');
  logger.info('Starting Web Server');
  logger.success('Deployment Ready');
  logger.divider();
}

// Load commands dynamically
async function loadCommands() {
  const commandsPath = path.join(__dirname, 'commands');
  const commands = new Map();

  async function scanFolder(dir) {
    const files = fs.readdirSync(dir);
    for (const file of files) {
      const filePath = path.join(dir, file);
      const stat = fs.statSync(filePath);
      
      if (stat.isDirectory()) {
        await scanFolder(filePath);
      } else if (file.endsWith('.js')) {
        try {
          const cmd = (await import(`file://${filePath}`)).default;
          commands.set(cmd.name, cmd);
        } catch (error) {
          logger.error(`Failed to load command ${file}: ${error.message}`);
        }
      }
    }
  }

  await scanFolder(commandsPath);
  return commands;
}

// Initialize WhatsApp connection
let smile;

async function setupWhatsApp() {
  try {
    smile = await initializeClient();

    // Handle incoming messages
    smile.ev.on('messages.upsert', async ({ messages }) => {
      for (const msg of messages) {
        if (!msg.message || msg.key.fromMe) continue;

        const m = serialize(msg, smile);
        if (!m) continue;

        // Log message
        logger.info(`Message from ${m.sender}: ${m.text}`);

        // Handle commands
        if (!m.text.startsWith(config.prefix)) continue;

        const args = m.text.slice(config.prefix.length).trim().split(/ +/);
        const command = args.shift().toLowerCase();

        const cmd = commands.get(command);
        if (!cmd) continue;

        try {
          if (cmd.isOwner && !m.isOwner) {
            return await smile.sendMessage(m.jid, { text: '❌ This command is for owner only' });
          }
          await cmd.execute(smile, m, args);
        } catch (error) {
          logger.error(`Command error: ${error.message}`);
          await smile.sendMessage(m.jid, { text: `❌ Error: ${error.message}` });
        }
      }
    });

    // Handle QR code (if needed)
    smile.ev.on('qr', (qr) => {
      console.log('QR Code received');
    });
  } catch (error) {
    logger.error(`WhatsApp setup error: ${error.message}`);
  }
}

// Load commands
let commands;

// Web server routes
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/index.html'));
});

app.get('/api/info', (req, res) => {
  res.json({
    botName: config.botName,
    developer: config.developer,
    poweredBy: config.poweredBy,
    server: config.deploymentServer,
    platform: 'Node.js',
    date: new Date().toLocaleDateString(),
  });
});

// Startup function
async function start() {
  await displayStartup();
  
  // Load commands
  commands = await loadCommands();
  logger.success(`Loaded ${commands.size} commands`);
  
  // Setup WhatsApp
  await setupWhatsApp();
  
  // Start web server
  app.listen(config.port, () => {
    logger.success(`Web server running on http://localhost:${config.port}`);
  });
}

// Handle pairing
if (!fs.existsSync(path.join(config.sessionFolder, 'creds'))) {
  (async () => {
    const number = await requestPhoneNumber();
    const validated = validatePhoneNumber(number);
    
    if (!validated) {
      logger.error('Invalid phone number');
      process.exit(1);
    }
    
    // Initialize smile first
    smile = await initializeClient();
    
    try {
      const code = await smile.requestPairingCode(validated);
      displayPairingCode(code);
      closePairingPrompt();
    } catch (error) {
      logger.error(`Pairing error: ${error.message}`);
      process.exit(1);
    }
    
    await new Promise(r => setTimeout(r, 2000));
    await start();
  })();
} else {
  start();
}
