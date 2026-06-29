export default {
  name: 'gdrive',
  description: 'Download from Google Drive',
  category: 'download',
  execute: async (smile, msg, args) => {
    if (!args.length) {
      return await smile.sendMessage(msg.jid, { text: '❌ Please provide a Google Drive URL' });
    }
    await smile.sendMessage(msg.jid, { text: '⏳ Downloading from Google Drive...' });
  },
};