export default {
  name: 'restore',
  description: 'Restore bot data',
  category: 'owner',
  isOwner: true,
  execute: async (smile, msg, args) => {
    await smile.sendMessage(msg.jid, { text: '📂 Restoring backup...' });
  },
};