export default {
  name: 'hidetag',
  description: 'Hide tag all members',
  category: 'group',
  isGroup: true,
  execute: async (smile, msg, args) => {
    try {
      const groupMetadata = await smile.groupMetadata(msg.jid);
      await smile.sendMessage(msg.jid, {
        text: args.join(' ') || '🔞 Hide Tag',
        mentions: groupMetadata.participants.map(p => p.id)
      });
    } catch (error) {
      await smile.sendMessage(msg.jid, { text: '❌ Error' });
    }
  },
};