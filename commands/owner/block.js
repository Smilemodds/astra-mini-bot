export default {
  name: 'block',
  description: 'Block a user',
  category: 'owner',
  isOwner: true,
  execute: async (smile, msg, args) => {
    if (!args.length) {
      return await smile.sendMessage(msg.jid, { text: '❌ Please provide a number' });
    }
    await smile.sendMessage(msg.jid, { text: `🚫 Blocked ${args[0]}` });
  },
};