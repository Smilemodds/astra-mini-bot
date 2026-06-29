export default {
  name: 'gpt',
  description: 'Ask GPT a question',
  category: 'ai',
  execute: async (smile, msg, args) => {
    if (!args.length) {
      return await smile.sendMessage(msg.jid, { text: '❌ Please ask a question' });
    }
    const question = args.join(' ');
    await smile.sendMessage(msg.jid, { text: `💭 GPT: ${question}` });
  },
};