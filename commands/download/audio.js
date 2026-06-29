export default {
  name: 'audio',
  description: 'Download generic audio',
  category: 'download',
  execute: async (smile, msg, args) => {
    if (!args.length) {
      return await smile.sendMessage(msg.jid, { text: '❌ Please provide an audio URL' });
    }
    await smile.sendMessage(msg.jid, { text: '⏳ Downloading audio...' });
  },
};