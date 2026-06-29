export default {
  name: 'eval',
  description: 'Execute JavaScript code',
  category: 'owner',
  isOwner: true,
  execute: async (smile, msg, args) => {
    if (!args.length) {
      return await smile.sendMessage(msg.jid, { text: '❌ Please provide code' });
    }
    await smile.sendMessage(msg.jid, { text: '⚙️ Executing code...' });
  },
};