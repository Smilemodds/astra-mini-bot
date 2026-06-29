export default {
  name: 'version',
  description: 'Get bot version',
  category: 'system',
  execute: async (smile, msg, args) => {
    const version = `
╭━━━━━━━━━━━━━━━━━━━━━━╮
┃   📦 VERSION INFO
┣━━━━━━━━━━━━━━━━━━━━━━┫
┃ Bot: ASTRA MINI BOT v1.0.0
┃ Baileys: Latest
┃ Node.js: ${process.version}
┃ Platform: ${process.platform}
╰━━━━━━━━━━━━━━━━━━━━━━╯
    `;
    await smile.sendMessage(msg.jid, { text: version });
  },
};