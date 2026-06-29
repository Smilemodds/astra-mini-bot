export default {
  name: 'removebg',
  description: 'Remove image background',
  category: 'tools',
  execute: async (smile, msg, args) => {
    await smile.sendMessage(msg.jid, { text: '🖼 Reply to an image with .removebg' });
  },
};