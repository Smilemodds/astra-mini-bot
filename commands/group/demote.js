export default {
  name: 'demote',
  description: 'Demote admin to member',
  category: 'group',
  isGroup: true,
  isBotAdmin: true,
  execute: async (smile, msg, args) => {
    await smile.sendMessage(msg.jid, { text: '⬇️ Admin demoted to member' });
  },
};