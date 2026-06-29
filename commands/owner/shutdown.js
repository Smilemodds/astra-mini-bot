export default {
  name: 'shutdown',
  description: 'Shutdown the bot',
  category: 'owner',
  isOwner: true,
  execute: async (smile, msg, args) => {
    await smile.sendMessage(msg.jid, { text: '🛑 Shutting down bot...' });
    process.exit(1);
  },
};