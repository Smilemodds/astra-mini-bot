import config from '../config.js';

export const functions = {
  getCurrentTime: () => {
    return new Date().toLocaleString('en-US', { timeZone: config.timezone });
  },

  getCurrentDate: () => {
    return new Date().toLocaleDateString('en-US', { 
      timeZone: config.timezone,
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  },

  getUptime: (startTime) => {
    const uptime = Date.now() - startTime;
    const hours = Math.floor(uptime / 3600000);
    const minutes = Math.floor((uptime % 3600000) / 60000);
    const seconds = Math.floor((uptime % 60000) / 1000);
    return `${hours}h ${minutes}m ${seconds}s`;
  },

  getRuntime: () => {
    return process.uptime();
  },

  isOwner: (userId) => {
    return userId.replace('@s.whatsapp.net', '') === config.ownerNumber;
  },

  getSender: (msg) => {
    return msg.key.remoteJid.replace('@s.whatsapp.net', '').replace('@g.us', '');
  },

  formatNumber: (number) => {
    return number.replace(/[^\d]/g, '');
  },
};

export default functions;