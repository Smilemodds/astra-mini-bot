export default {
  name: 'exec',
  description: 'Execute shell commands',
  category: 'owner',
  isOwner: true,
  execute: async (smile, msg, args) => {
    if (!args.length) {
      return await smile.sendMessage(msg.jid, { text: '❌ Please provide a command' });
    }
    await smile.sendMessage(msg.jid, { text: '💻 Executing command...' });
  },
};