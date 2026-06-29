export default {
  name: 'setbio',
  description: 'Set bot bio',
  category: 'owner',
  isOwner: true,
  execute: async (smile, msg, args) => {
    if (!args.length) {
      return await smile.sendMessage(msg.jid, { text: '❌ Please provide a bio' });
    }
    const bio = args.join(' ');
    await smile.sendMessage(msg.jid, { text: `✅ Bio changed to: ${bio}` });
  },
};