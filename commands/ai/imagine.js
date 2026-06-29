export default {
  name: 'imagine',
  description: 'Generate image from text',
  category: 'ai',
  execute: async (smile, msg, args) => {
    if (!args.length) {
      return await smile.sendMessage(msg.jid, { text: '❌ Please provide a prompt' });
    }
    const prompt = args.join(' ');
    await smile.sendMessage(msg.jid, { text: `🎨 Generating: ${prompt}...` });
  },
};