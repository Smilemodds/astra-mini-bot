export default {
  name: 'fancy',
  description: 'Convert text to fancy font',
  category: 'tools',
  execute: async (smile, msg, args) => {
    if (!args.length) {
      return await smile.sendMessage(msg.jid, { text: '❌ Please provide text' });
    }
    const text = args.join(' ');
    await smile.sendMessage(msg.jid, { text: `✨ ${text}` });
  },
};