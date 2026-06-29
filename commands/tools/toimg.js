export default {
  name: 'toimg',
  description: 'Convert sticker to image',
  category: 'tools',
  execute: async (smile, msg, args) => {
    await smile.sendMessage(msg.jid, { text: '🖼 Reply to a sticker with .toimg' });
  },
};