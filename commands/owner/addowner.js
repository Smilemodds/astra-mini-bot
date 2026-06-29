export default {
  name: 'addowner',
  description: 'Add a new owner',
  category: 'owner',
  isOwner: true,
  execute: async (smile, msg, args) => {
    if (!args.length) {
      return await smile.sendMessage(msg.jid, { text: '❌ Please provide a number' });
    }
    await smile.sendMessage(msg.jid, { text: `✅ Added ${args[0]} as owner` });
  },
};