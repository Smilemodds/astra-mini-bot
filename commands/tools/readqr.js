export default {
  name: 'readqr',
  description: 'Read QR code',
  category: 'tools',
  execute: async (smile, msg, args) => {
    await smile.sendMessage(msg.jid, { text: '📸 Reply to a QR code image with .readqr' });
  },
};