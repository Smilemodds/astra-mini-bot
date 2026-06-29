export default {
  name: 'translate',
  description: 'Translate text',
  category: 'ai',
  execute: async (smile, msg, args) => {
    if (!args.length) {
      return await smile.sendMessage(msg.jid, { text: '❌ Please provide text to translate' });
    }
    const text = args.join(' ');
    await smile.sendMessage(msg.jid, { text: `🌐 Translating: ${text}...` });
  },
};