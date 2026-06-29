export default {
  name: 'backup',
  description: 'Backup bot data',
  category: 'owner',
  isOwner: true,
  execute: async (smile, msg, args) => {
    await smile.sendMessage(msg.jid, { text: '💾 Creating backup...' });
  },
};