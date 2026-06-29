export default {
  name: 'pinterest',
  description: 'Download from Pinterest',
  category: 'download',
  execute: async (smile, msg, args) => {
    if (!args.length) {
      return await smile.sendMessage(msg.jid, { text: '❌ Please provide a Pinterest URL' });
    }
    await smile.sendMessage(msg.jid, { text: '⏳ Downloading from Pinterest...' });
  },
};