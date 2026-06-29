export default {
  name: 'grouplink',
  description: 'Get group invite link',
  category: 'group',
  isGroup: true,
  execute: async (smile, msg, args) => {
    try {
      const inviteCode = await smile.groupInviteCode(msg.jid);
      await smile.sendMessage(msg.jid, { text: `🔗 Group Link:\nhttps://chat.whatsapp.com/${inviteCode}` });
    } catch (error) {
      await smile.sendMessage(msg.jid, { text: '❌ Error getting link' });
    }
  },
};