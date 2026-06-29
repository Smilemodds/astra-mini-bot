export default {
  name: 'runtime',
  description: 'Get bot runtime',
  category: 'system',
  execute: async (smile, msg, args) => {
    const uptime = process.uptime();
    const hours = Math.floor(uptime / 3600);
    const minutes = Math.floor((uptime % 3600) / 60);
    const seconds = Math.floor(uptime % 60);
    
    await smile.sendMessage(msg.jid, { text: `⏳ Runtime: ${hours}h ${minutes}m ${seconds}s` });
  },
};