export default {
  name: 'unblock',
  description: 'Unblock a user',
  category: 'owner',
  isOwner: true,
  execute: async (smile, msg, args) => {
    if (!args.length) {
      return await smile.sendMessage(msg.jid, { text: '❌ Please provide a number' });
    }
    await smile.sendMessage(msg.jid, { text: `✅ Unblocked ${args[0]}` });
  },
};