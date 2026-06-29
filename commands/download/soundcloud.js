export default {
  name: 'soundcloud',
  description: 'Download from SoundCloud',
  category: 'download',
  execute: async (smile, msg, args) => {
    if (!args.length) {
      return await smile.sendMessage(msg.jid, { text: '❌ Please provide a SoundCloud URL or query' });
    }
    await smile.sendMessage(msg.jid, { text: '🎵 Searching on SoundCloud...' });
  },
};