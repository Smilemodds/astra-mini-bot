export default {
  name: 'dictionary',
  description: 'Look up word in dictionary',
  category: 'ai',
  execute: async (smile, msg, args) => {
    if (!args.length) {
      return await smile.sendMessage(msg.jid, { text: '❌ Please provide a word' });
    }
    const word = args[0];
    await smile.sendMessage(msg.jid, { text: `📖 Looking up: ${word}...` });
  },
};