import readline from 'readline';
import { logger } from './logger.js';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function question(prompt) {
  return new Promise((resolve) => {
    rl.question(prompt, resolve);
  });
}

export async function requestPhoneNumber() {
  console.clear();
  logger.divider();
  console.log('╭━━━━━━━━━━━━━━━━━━━━━━╮');
  console.log('┃ ✦ ASTRA MINI BOT ✦');
  console.log('┣━━━━━━━━━━━━━━━━━━━━━━┫');
  console.log('┃ Enter WhatsApp Number');
  console.log('┃ Example: 254712345678');
  console.log('╰━━━━━━━━━━━━━━━━━━━━━━╯');
  logger.divider();
  
  const number = await question('\n📱 Number: ');
  return number;
}

export function validatePhoneNumber(number) {
  let cleaned = number.replace(/[\s+\-]/g, '');
  
  if (cleaned.length < 10 || cleaned.length > 15) {
    return null;
  }
  
  if (!/^\d+$/.test(cleaned)) {
    return null;
  }
  
  return cleaned;
}

export async function displayPairingCode(code) {
  console.clear();
  logger.divider();
  console.log('╭━━━━━━━━━━━━━━━━━━━━━━╮');
  console.log('┃     PAIRING CODE');
  console.log('┣━━━━━━━━━━━━━━━━━━━━━━┫');
  console.log(`┃ ${code}`);
  console.log('┣━━━━━━━━━━━━━━━━━━━━━━┫');
  console.log('┃ Open WhatsApp');
  console.log('┃ Settings > Linked Devices');
  console.log('┃ Link Device');
  console.log('┃ Enter the code above');
  console.log('╰━━━━━━━━━━━━━━━━━━━━━━╯');
  logger.divider();
  console.log('\n⏳ Waiting for pairing confirmation...\n');
}

export function closePairingPrompt() {
  rl.close();
}

export default { requestPhoneNumber, validatePhoneNumber, displayPairingCode, closePairingPrompt };