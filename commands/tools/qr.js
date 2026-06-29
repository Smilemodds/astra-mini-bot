export default {
  name: 'qr',
  description: 'Generate QR code',
  category: 'tools',
  execute: async (smile, msg, args) => {
    if (!args.length) {
      return await smile.sendMessage(msg.jid, { text: '❌ Please provide text' });
    }
    const text = args.join(' ');
    await smile.sendMessage(msg.jid, { text: `📱 Generating QR code for: ${text}...` });
  },
};