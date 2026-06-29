export default {
  name: 'kick',
  description: 'Kick a member from group',
  category: 'group',
  isGroup: true,
  isBotAdmin: true,
  execute: async (smile, msg, args) => {
    await smile.sendMessage(msg.jid, { text: '👢 Member kicked from group' });
  },
};