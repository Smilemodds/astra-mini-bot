export default {
  name: 'broadcast',
  description: 'Broadcast message to all chats',
  category: 'owner',
  isOwner: true,
  execute: async (smile, msg, args) => {
    if (!args.length) {
      return await smile.sendMessage(msg.jid, { text: '❌ Please provide a message' });
    }
    await smile.sendMessage(msg.jid, { text: '📢 Broadcasting message...' });
  },
};