export default {
  name: 'facebook',
  description: 'Download from Facebook',
  category: 'download',
  execute: async (smile, msg, args) => {
    if (!args.length) {
      return await smile.sendMessage(msg.jid, { text: '❌ Please provide a Facebook URL' });
    }
    await smile.sendMessage(msg.jid, { text: '⏳ Downloading from Facebook...' });
  },
};