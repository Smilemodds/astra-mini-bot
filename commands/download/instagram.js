export default {
  name: 'instagram',
  description: 'Download from Instagram',
  category: 'download',
  execute: async (smile, msg, args) => {
    if (!args.length) {
      return await smile.sendMessage(msg.jid, { text: '❌ Please provide an Instagram URL' });
    }
    await smile.sendMessage(msg.jid, { text: '⏳ Downloading from Instagram...' });
  },
};