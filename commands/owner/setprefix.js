export default {
  name: 'setprefix',
  description: 'Set bot prefix',
  category: 'owner',
  isOwner: true,
  execute: async (smile, msg, args) => {
    if (!args.length) {
      return await smile.sendMessage(msg.jid, { text: '❌ Please provide a prefix' });
    }
    await smile.sendMessage(msg.jid, { text: `✅ Prefix changed to: ${args[0]}` });
  },
};