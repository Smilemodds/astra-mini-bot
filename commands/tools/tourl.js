export default {
  name: 'tourl',
  description: 'Convert media to URL',
  category: 'tools',
  execute: async (smile, msg, args) => {
    await smile.sendMessage(msg.jid, { text: '🔗 Reply to a media with .tourl' });
  },
};