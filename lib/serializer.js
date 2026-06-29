export function serialize(msg, smile) {
  if (!msg.message) return null;

  const m = {};
  m.id = msg.key.id;
  m.jid = msg.key.remoteJid;
  m.sender = msg.key.participant || msg.key.remoteJid;
  m.isOwner = m.sender === (process.env.OWNER_NUMBER + '@s.whatsapp.net');
  m.isGroup = msg.key.remoteJid.endsWith('@g.us');
  m.isBot = m.sender === smile.user?.id;
  m.text = msg.message.conversation || msg.message.extendedTextMessage?.text || '';
  m.quoted = msg.message.extendedTextMessage?.quotedMessage || null;
  m.type = Object.keys(msg.message)[0];

  return m;
}

export default serialize;