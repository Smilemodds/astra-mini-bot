export default {
  name: 'lyrics',
  description: 'Get song lyrics',
  category: 'ai',
  execute: async (smile, msg, args) => {
    if (!args.length) {
      return await smile.sendMessage(msg.jid, { text: '❌ Please provide a song name' });
    }
    const song = args.join(' ');
    await smile.sendMessage(msg.jid, { text: `🎵 Getting lyrics for: ${song}...` });
  },
};