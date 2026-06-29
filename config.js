import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const config = {
  // Bot Information
  botName: process.env.BOT_NAME || '✦ ASTRA MINI BOT ✦',
  ownerName: process.env.OWNER_NAME || '𝐒𝚳𝚰𝐋𝚵',
  ownerNumber: process.env.OWNER_NUMBER || '254712345678',
  prefix: process.env.PREFIX || '.',
  timezone: process.env.TIMEZONE || 'Africa/Nairobi',
  mode: process.env.MODE || 'public', // public or private
  
  // Server Configuration
  port: process.env.PORT || 3000,
  deploymentServer: process.env.DEPLOYMENT_SERVER || 'Katabump',
  
  // Features
  autoRead: process.env.AUTO_READ === 'true',
  autoTyping: process.env.AUTO_TYPING === 'true',
  autoReact: process.env.AUTO_REACT === 'true',
  autoRecording: process.env.AUTO_RECORDING === 'true',
  
  // Menu Image Configuration
  menu: {
    imageUrl: process.env.MENU_IMAGE || 'https://via.placeholder.com/1280x720?text=ASTRA+MINI+BOT',
    useImage: process.env.USE_MENU_IMAGE === 'true' || true,
    caption: '✦ ASTRA MINI BOT ✦\n\n*Main Menu*\n\nPowered by ASTRA TECH\nCreated by 𝐒𝚳𝚰𝐋𝚵',
  },
  
  // Paths
  sessionFolder: path.join(__dirname, process.env.SESSION_FOLDER || 'session'),
  databaseFolder: path.join(__dirname, process.env.DATABASE_FOLDER || 'database'),
  
  // Meta Information
  developer: '𝐒𝚳𝚰𝐋𝚵',
  poweredBy: 'ASTRA TECH',
};

export default config;
