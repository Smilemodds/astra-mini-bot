export default {
  name: 'video',
  description: 'Download generic video',
  category: 'download',
  execute: async (smile, msg, args) => {
    if (!args.length) {
      return await smile.sendMessage(msg.jid, { text: '❌ Please provide a video URL' });
    }
    await smile.sendMessage(msg.jid, { text: '⏳ Downloading video...' });
  },
};