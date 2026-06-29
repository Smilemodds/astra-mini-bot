export default {
  name: 'npm',
  description: 'Search NPM packages',
  category: 'ai',
  execute: async (smile, msg, args) => {
    if (!args.length) {
      return await smile.sendMessage(msg.jid, { text: '❌ Please provide a package name' });
    }
    const pkg = args.join(' ');
    await smile.sendMessage(msg.jid, { text: `📦 Searching NPM: ${pkg}...` });
  },
};