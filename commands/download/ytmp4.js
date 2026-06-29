export default {
  name: 'ytmp4',
  description: 'Download YouTube video',
  category: 'download',
  execute: async (smile, msg, args) => {
    if (!args.length) {
      return await smile.sendMessage(msg.jid, { text: '❌ Please provide a YouTube URL' });
    }
    await smile.sendMessage(msg.jid, { text: '⏳ Downloading video...' });
  },
};