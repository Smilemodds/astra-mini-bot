import config from '../../config.js';

export default {
  name: 'owner',
  description: 'Get owner info',
  category: 'system',
  execute: async (smile, msg, args) => {
    const ownerText = `
╭━━━━━━━━━━━━━━━━━━━━━━╮
┃   👨‍💻 OWNER INFO
┣━━━━━━━━━━━━━━━━━━━━━━┫
┃ 👤 Name: ${config.ownerName}
┃ 📱 Number: ${config.ownerNumber}
┃ 🤖 Bot: ${config.botName}
┃ ⚡ Status: Online
┣━━━━━━━━━━━━━━━━━━━━━━┫
┃ Contact owner for:
┃ • Bug Reports
┃ • Feature Requests
┃ • Support
┃ • Customization
╰━━━━━━━━━━━━━━━━━━━━━━╯
    `;
    await smile.sendMessage(msg.jid, { text: ownerText });
  },
};