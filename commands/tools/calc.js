export default {
  name: 'calc',
  description: 'Calculate math expression',
  category: 'tools',
  execute: async (smile, msg, args) => {
    if (!args.length) {
      return await smile.sendMessage(msg.jid, { text: '❌ Please provide a math expression' });
    }
    try {
      const result = Function('"use strict"; return (' + args.join('') + ')')();
      await smile.sendMessage(msg.jid, { text: `🧮 Result: ${result}` });
    } catch (error) {
      await smile.sendMessage(msg.jid, { text: '❌ Invalid expression' });
    }
  },
};