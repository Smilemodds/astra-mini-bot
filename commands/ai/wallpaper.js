export default {
  name: 'wallpaper',
  description: 'Get random wallpaper',
  category: 'ai',
  execute: async (smile, msg, args) => {
    await smile.sendMessage(msg.jid, { text: '🖼 Getting random wallpaper...' });
  },
};