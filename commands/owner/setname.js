export default {
  name: 'setname',
  description: 'Set bot name',
  category: 'owner',
  isOwner: true,
  execute: async (smile, msg, args) => {
    if (!args.length) {
      return await smile.sendMessage(msg.jid, { text: '❌ Please provide a name' });
    }
    const name = args.join(' ');
    await smile.sendMessage(msg.jid, { text: `✅ Bot name changed to: ${name}` });
  },
};