export default {
  name: 'sticker',
  description: 'Convert image to sticker',
  category: 'tools',
  execute: async (smile, msg, args) => {
    await smile.sendMessage(msg.jid, { text: '🎨 Reply to an image with .sticker' });
  },
};