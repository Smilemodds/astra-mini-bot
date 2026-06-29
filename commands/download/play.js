export default {
  name: 'play',
  description: 'Play music from YouTube',
  category: 'download',
  execute: async (smile, msg, args) => {
    if (!args.length) {
      return await smile.sendMessage(msg.jid, { text: '❌ Please provide a song name' });
    }
    const query = args.join(' ');
    await smile.sendMessage(msg.jid, { text: `🎵 Searching for: ${query}...` });
  },
};