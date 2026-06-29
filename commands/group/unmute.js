export default {
  name: 'unmute',
  description: 'Unmute group',
  category: 'group',
  isGroup: true,
  isBotAdmin: true,
  execute: async (smile, msg, args) => {
    await smile.sendMessage(msg.jid, { text: '🔊 Group unmuted' });
  },
};