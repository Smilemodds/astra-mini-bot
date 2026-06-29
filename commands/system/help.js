export default {
  name: 'help',
  description: 'Show help message',
  category: 'system',
  execute: async (smile, msg, args) => {
    const help = `
╭━━━━━━━━━━━━━━━━━━━━━━╮
┃   📚 HELP MENU
┣━━━━━━━━━━━━━━━━━━━━━━┫
┃
┃ Categories:
┃ ❏ .menu - Main menu
┃ ❏ .system - System commands
┃ ❏ .group - Group commands
┃ ❏ .download - Download commands
┃ ❏ .ai - AI & Search
┃ ❏ .tools - Tools & utilities
┃ ❏ .owner - Owner commands
┃
┣━━━━━━━━━━━━━━━━━━━━━━┫
┃ Use .menu for full menu
╰━━━━━━━━━━━━━━━━━━━━━━╯
    `;
    await smile.sendMessage(msg.jid, { text: help });
  },
};