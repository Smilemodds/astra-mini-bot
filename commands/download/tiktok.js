export default {
  name: 'tiktok',
  description: 'Download from TikTok',
  category: 'download',
  execute: async (smile, msg, args) => {
    if (!args.length) {
      return await smile.sendMessage(msg.jid, { text: '❌ Please provide a TikTok URL' });
    }
    await smile.sendMessage(msg.jid, { text: '⏳ Downloading from TikTok...' });
  },
};