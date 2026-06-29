export default {
  name: 'ai',
  description: 'Ask AI a question',
  category: 'ai',
  execute: async (smile, msg, args) => {
    if (!args.length) {
      return await smile.sendMessage(msg.jid, { text: '❌ Please ask a question' });
    }
    const question = args.join(' ');
    await smile.sendMessage(msg.jid, { text: `🤖 Processing: ${question}...` });
  },
};