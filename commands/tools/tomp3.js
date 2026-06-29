export default {
  name: 'tomp3',
  description: 'Convert video to MP3',
  category: 'tools',
  execute: async (smile, msg, args) => {
    await smile.sendMessage(msg.jid, { text: '🎵 Reply to a video with .tomp3' });
  },
};