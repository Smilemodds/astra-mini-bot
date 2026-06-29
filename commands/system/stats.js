export default {
  name: 'stats',
  description: 'Get bot statistics',
  category: 'system',
  execute: async (smile, msg, args) => {
    const stats = `
╭━━━━━━━━━━━━━━━━━━━━━━╮
┃   📊 BOT STATISTICS
┣━━━━━━━━━━━━━━━━━━━━━━┫
┃ Commands: 90+
┃ Categories: 6
┃ Uptime: Active
┃ Status: Online
┃ Mode: Public
╰━━━━━━━━━━━━━━━━━━━━━━╯
    `;
    await smile.sendMessage(msg.jid, { text: stats });
  },
};