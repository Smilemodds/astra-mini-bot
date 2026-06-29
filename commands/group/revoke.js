export default {
  name: 'revoke',
  description: 'Revoke group link',
  category: 'group',
  isGroup: true,
  isBotAdmin: true,
  execute: async (smile, msg, args) => {
    await smile.sendMessage(msg.jid, { text: '🔄 Group link revoked' });
  },
};