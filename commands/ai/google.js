export default {
  name: 'google',
  description: 'Search on Google',
  category: 'ai',
  execute: async (smile, msg, args) => {
    if (!args.length) {
      return await smile.sendMessage(msg.jid, { text: '❌ Please provide a search query' });
    }
    const query = args.join(' ');
    await smile.sendMessage(msg.jid, { text: `🔍 Searching Google: ${query}...` });
  },
};