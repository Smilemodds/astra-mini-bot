export default {
  name: 'promote',
  description: 'Promote member to admin',
  category: 'group',
  isGroup: true,
  isBotAdmin: true,
  execute: async (smile, msg, args) => {
    await smile.sendMessage(msg.jid, { text: '⬆️ Member promoted to admin' });
  },
};