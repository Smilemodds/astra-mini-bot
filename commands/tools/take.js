export default {
  name: 'take',
  description: 'Add watermark to image',
  category: 'tools',
  execute: async (smile, msg, args) => {
    await smile.sendMessage(msg.jid, { text: '🎨 Reply to an image with .take' });
  },
};