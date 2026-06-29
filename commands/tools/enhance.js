export default {
  name: 'enhance',
  description: 'Enhance image quality',
  category: 'tools',
  execute: async (smile, msg, args) => {
    await smile.sendMessage(msg.jid, { text: '📸 Reply to an image with .enhance' });
  },
};