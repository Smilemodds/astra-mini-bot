export default {
  name: 'alive',
  description: 'Check if bot is alive',
  category: 'system',
  execute: async (smile, msg, args) => {
    const alive = `
╭━━━━━━━━━━━━━━━━━━━━━━╮
┃   ✦ ASTRA MINI BOT ✦
┣━━━━━━━━━━━━━━━━━━━━━━┫
┃ 🟢 Status: Online
┃ ⚡ Status: Active
┃ 📊 Performance: Optimal
┃ 💾 Memory: Good
┃ 🔋 CPU: Normal
┣━━━━━━━━━━━━━━━━━━━━━━┫
┃ 👨‍💻 Developer: 𝐒𝚳𝚰𝐋𝚵
┃ ⚡ Powered By: ASTRA TECH
╰━━━━━━━━━━━━━━━━━━━━━━╯
    `;
    await smile.sendMessage(msg.jid, { text: alive });
  },
};