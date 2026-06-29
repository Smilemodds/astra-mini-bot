export default {
  name: 'weather',
  description: 'Get weather information',
  category: 'ai',
  execute: async (smile, msg, args) => {
    if (!args.length) {
      return await smile.sendMessage(msg.jid, { text: '❌ Please provide a location' });
    }
    const location = args.join(' ');
    await smile.sendMessage(msg.jid, { text: `🌤 Weather in ${location}...` });
  },
};