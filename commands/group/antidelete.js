export default {
  name: 'antidelete',
  description: 'Enable/disable antidelete',
  category: 'group',
  isGroup: true,
  isBotAdmin: true,
  execute: async (smile, msg, args) => {
    const status = args[0]?.toLowerCase() || 'toggle';
    await smile.sendMessage(msg.jid, { text: `✅ Antidelete ${status}` });
  },
};