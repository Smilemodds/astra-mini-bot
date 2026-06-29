export default {
  name: 'groupinfo',
  description: 'Get group information',
  category: 'group',
  isGroup: true,
  execute: async (smile, msg, args) => {
    try {
      const groupMetadata = await smile.groupMetadata(msg.jid);
      const info = `
╭━━━━━━━━━━━━━━━━━━━━━━╮
┃ 👥 GROUP INFO
┣━━━━━━━━━━━━━━━━━━━━━━┫
┃ 📛 Name: ${groupMetadata.subject}
┃ 👥 Members: ${groupMetadata.participants.length}
┃ 👨‍💼 Owner: ${groupMetadata.owner}
┃ ⏰ Created: ${new Date(groupMetadata.creation * 1000).toDateString()}
╰━━━━━━━━━━━━━━━━━━━━━━╯
      `;
      await smile.sendMessage(msg.jid, { text: info });
    } catch (error) {
      await smile.sendMessage(msg.jid, { text: '❌ Error' });
    }
  },
};