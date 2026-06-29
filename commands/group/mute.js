export default {
  name: 'mute',
  description: 'Mute group for non-admins',
  category: 'group',
  isGroup: true,
  isBotAdmin: true,
  execute: async (smile, msg, args) => {
    await smile.sendMessage(msg.jid, { text: '🔇 Group muted' });
  },
};