export default {
  name: 'movie',
  description: 'Get movie information',
  category: 'ai',
  execute: async (smile, msg, args) => {
    if (!args.length) {
      return await smile.sendMessage(msg.jid, { text: '❌ Please provide a movie name' });
    }
    const movie = args.join(' ');
    await smile.sendMessage(msg.jid, { text: `🎥 Searching: ${movie}...` });
  },
};