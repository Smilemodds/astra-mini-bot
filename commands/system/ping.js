export default {
  name: 'ping',
  description: 'Check bot ping',
  category: 'system',
  execute: async (smile, msg, args) => {
    const timestamp = new Date().getMilliseconds();
    const sentMsg = await smile.sendMessage(msg.jid, { text: 'Pong!' });
    const newTimestamp = new Date().getMilliseconds();
    const ping = newTimestamp - timestamp;
    
    await smile.sendMessage(msg.jid, { 
      text: `🏓 Pong!\n⏱ Ping: ${ping}ms`,
      edit: sentMsg.key
    });
  },
};