export default {
  name: 'delowner',
  description: 'Remove an owner',
  category: 'owner',
  isOwner: true,
  execute: async (smile, msg, args) => {
    if (!args.length) {
      return await smile.sendMessage(msg.jid, { text: '❌ Please provide a number' });
    }
    await smile.sendMessage(msg.jid, { text: `✅ Removed ${args[0]} from owners` });
  },
};