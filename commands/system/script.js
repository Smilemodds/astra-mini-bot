export default {
  name: 'script',
  description: 'Get bot script/repository',
  category: 'system',
  execute: async (smile, msg, args) => {
    const script = `
╭━━━━━━━━━━━━━━━━━━━━━━╮
┃   💻 BOT SCRIPT
┣━━━━━━━━━━━━━━━━━━━━━━┫
┃ Repository:
┃ github.com/Smilemodds/astra-mini-bot
┃
┃ License: MIT
┃ Language: Node.js
┃ Library: @whiskeysockets/baileys
╰━━━━━━━━━━━━━━━━━━━━━━╯
    `;
    await smile.sendMessage(msg.jid, { text: script });
  },
};