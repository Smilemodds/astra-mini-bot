export default {
  name: 'ytmp3',
  description: 'Download YouTube audio',
  category: 'download',
  execute: async (smile, msg, args) => {
    if (!args.length) {
      return await smile.sendMessage(msg.jid, { text: '❌ Please provide a YouTube URL' });
    }
    await smile.sendMessage(msg.jid, { text: '⏳ Downloading audio...' });
  },
};