export default {
  name: 'mediafire',
  description: 'Download from MediaFire',
  category: 'download',
  execute: async (smile, msg, args) => {
    if (!args.length) {
      return await smile.sendMessage(msg.jid, { text: '❌ Please provide a MediaFire URL' });
    }
    await smile.sendMessage(msg.jid, { text: '⏳ Downloading from MediaFire...' });
  },
};