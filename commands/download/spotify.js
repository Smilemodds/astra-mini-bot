export default {
  name: 'spotify',
  description: 'Download from Spotify',
  category: 'download',
  execute: async (smile, msg, args) => {
    if (!args.length) {
      return await smile.sendMessage(msg.jid, { text: '❌ Please provide a Spotify URL or query' });
    }
    await smile.sendMessage(msg.jid, { text: '🎵 Searching on Spotify...' });
  },
};