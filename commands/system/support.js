export default {
  name: 'support',
  description: 'Get support information',
  category: 'system',
  execute: async (smile, msg, args) => {
    const support = `
╭━━━━━━━━━━━━━━━━━━━━━━╮
┃   📞 SUPPORT
┣━━━━━━━━━━━━━━━━━━━━━━┫
┃ 💬 Need help?
┃ 📧 Contact: support@astratech.com
┃ 🌐 Website: astratech.com
┃ 📱 WhatsApp: Tap owner command
┣━━━━━━━━━━━━━━━━━━━━━━┫
┃ Available 24/7
╰━━━━━━━━━━━━━━━━━━━━━━╯
    `;
    await smile.sendMessage(msg.jid, { text: support });
  },
};