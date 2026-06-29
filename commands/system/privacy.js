export default {
  name: 'privacy',
  description: 'Privacy policy',
  category: 'system',
  execute: async (smile, msg, args) => {
    const privacy = `
╭━━━━━━━━━━━━━━━━━━━━━━╮
┃   🔐 PRIVACY POLICY
┣━━━━━━━━━━━━━━━━━━━━━━┫
┃ We respect your privacy
┃ Data is not shared
┃ Sessions are encrypted
┃ No logging of messages
╰━━━━━━━━━━━━━━━━━━━━━━╯
    `;
    await smile.sendMessage(msg.jid, { text: privacy });
  },
};