export default {
  name: 'profile',
  description: 'Get user profile',
  category: 'system',
  execute: async (smile, msg, args) => {
    const profile = `
╭━━━━━━━━━━━━━━━━━━━━━━╮
┃   👤 YOUR PROFILE
┣━━━━━━━━━━━━━━━━━━━━━━┫
┃ Number: ${msg.sender.replace('@s.whatsapp.net', '')}
┃ Is Owner: No
┃ Is Admin: No
┃ Status: Active
╰━━━━━━━━━━━━━━━━━━━━━━╯
    `;
    await smile.sendMessage(msg.jid, { text: profile });
  },
};