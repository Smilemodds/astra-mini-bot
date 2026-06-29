export default {
  name: 'tovideo',
  description: 'Convert audio to video',
  category: 'tools',
  execute: async (smile, msg, args) => {
    await smile.sendMessage(msg.jid, { text: '🎬 Reply to audio with .tovideo' });
  },
};