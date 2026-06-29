export default {
  name: 'tagall',
  description: 'Tag all members in group',
  category: 'group',
  isGroup: true,
  execute: async (smile, msg, args) => {
    try {
      const groupMetadata = await smile.groupMetadata(msg.jid);
      let text = args.join(' ') || '📢 Everyone!';
      
      for (let member of groupMetadata.participants) {
        text += '@' + member.id.split('@')[0] + ' ';
      }
      
      await smile.sendMessage(msg.jid, {
        text: text,
        mentions: groupMetadata.participants.map(p => p.id)
      });
    } catch (error) {
      await smile.sendMessage(msg.jid, { text: '❌ Error tagging members' });
    }
  },
};