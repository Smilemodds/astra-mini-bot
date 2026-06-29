export default {
  name: 'news',
  description: 'Get latest news',
  category: 'ai',
  execute: async (smile, msg, args) => {
    await smile.sendMessage(msg.jid, { text: '📰 Fetching latest news...' });
  },
};