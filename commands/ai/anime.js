export default {
  name: 'anime',
  description: 'Get anime information',
  category: 'ai',
  execute: async (smile, msg, args) => {
    if (!args.length) {
      return await smile.sendMessage(msg.jid, { text: '❌ Please provide an anime name' });
    }
    const anime = args.join(' ');
    await smile.sendMessage(msg.jid, { text: `🎬 Searching: ${anime}...` });
  },
};