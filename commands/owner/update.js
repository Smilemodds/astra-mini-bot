export default {
  name: 'update',
  description: 'Update bot from repository',
  category: 'owner',
  isOwner: true,
  execute: async (smile, msg, args) => {
    await smile.sendMessage(msg.jid, { text: '⬆️ Checking for updates...' });
  },
};