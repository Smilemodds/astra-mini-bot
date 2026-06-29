export default {
  name: 'apk',
  description: 'Download APK from app name',
  category: 'download',
  execute: async (smile, msg, args) => {
    if (!args.length) {
      return await smile.sendMessage(msg.jid, { text: '❌ Please provide an app name' });
    }
    const appName = args.join(' ');
    await smile.sendMessage(msg.jid, { text: `📱 Searching for: ${appName}...` });
  },
};