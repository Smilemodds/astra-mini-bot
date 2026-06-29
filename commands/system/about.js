export default {
  name: 'about',
  description: 'About ASTRA bot',
  category: 'system',
  execute: async (smile, msg, args) => {
    const about = `
╭━━━━━━━━━━━━━━━━━━━━━━╮
┃   ℹ️ ABOUT
┣━━━━━━━━━━━━━━━━━━━━━━┫
┃ ✦ ASTRA MINI BOT ✦
┃
┃ A modern, lightweight,
┃ fast, secure, and
┃ professional WhatsApp
┃ bot built with Node.js
┃
┃ Developer: 𝐒𝚳𝚰𝐋𝚵
┃ Powered By: ASTRA TECH
┃ Deployed On: Katabump
╰━━━━━━━━━━━━━━━━━━━━━━╯
    `;
    await smile.sendMessage(msg.jid, { text: about });
  },
};