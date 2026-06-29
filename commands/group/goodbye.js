export default {
  name: 'goodbye',
  description: 'Set goodbye message',
  category: 'group',
  isGroup: true,
  isBotAdmin: true,
  execute: async (smile, msg, args) => {
    if (!args.length) {
      return await smile.sendMessage(msg.jid, { text: '❌ Please provide a message' });
    }
    await smile.sendMessage(msg.jid, { text: '✅ Goodbye message set' });
  },
};