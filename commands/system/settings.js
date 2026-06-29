export default {
  name: 'settings',
  description: 'Bot settings',
  category: 'system',
  execute: async (smile, msg, args) => {
    const settings = `
╭━━━━━━━━━━━━━━━━━━━━━━╮
┃   ⚙️ SETTINGS
┣━━━━━━━━━━━━━━━━━━━━━━┫
┃ Prefix: .
┃ Auto Read: ✅
┃ Auto Typing: ✅
┃ Auto React: ✅
┃ Mode: Public
╰━━━━━━━━━━━━━━━━━━━━━━╯
    `;
    await smile.sendMessage(msg.jid, { text: settings });
  },
};