export default {
  name: 'add',
  description: 'Add a member to group',
  category: 'group',
  isGroup: true,
  isBotAdmin: true,
  execute: async (smile, msg, args) => {
    if (!args.length) {
      return await smile.sendMessage(msg.jid, { text: '❌ Please provide a number' });
    }
    await smile.sendMessage(msg.jid, { text: `✅ Added ${args[0]} to group` });
  },
};