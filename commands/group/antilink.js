export default {
  name: 'antilink',
  description: 'Enable/disable antilink',
  category: 'group',
  isGroup: true,
  isBotAdmin: true,
  execute: async (smile, msg, args) => {
    const status = args[0]?.toLowerCase() || 'toggle';
    await smile.sendMessage(msg.jid, { text: `✅ Antilink ${status}` });
  },
};