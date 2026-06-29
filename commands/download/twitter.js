export default {
  name: 'twitter',
  description: 'Download from Twitter',
  category: 'download',
  execute: async (smile, msg, args) => {
    if (!args.length) {
      return await smile.sendMessage(msg.jid, { text: '❌ Please provide a Twitter URL' });
    }
    await smile.sendMessage(msg.jid, { text: '⏳ Downloading from Twitter...' });
  },
};