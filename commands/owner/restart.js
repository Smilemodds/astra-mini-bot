export default {
  name: 'restart',
  description: 'Restart the bot',
  category: 'owner',
  isOwner: true,
  execute: async (smile, msg, args) => {
    await smile.sendMessage(msg.jid, { text: '🔄 Restarting bot...' });
    process.exit(0);
  },
};