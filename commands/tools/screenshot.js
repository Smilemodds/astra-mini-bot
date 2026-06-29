export default {
  name: 'screenshot',
  description: 'Take screenshot of URL',
  category: 'tools',
  execute: async (smile, msg, args) => {
    if (!args.length) {
      return await smile.sendMessage(msg.jid, { text: '❌ Please provide a URL' });
    }
    const url = args[0];
    await smile.sendMessage(msg.jid, { text: `📸 Taking screenshot...` });
  },
};