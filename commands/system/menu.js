export default {
  name: 'menu',
  description: 'Show bot menu',
  category: 'system',
  execute: async (smile, msg, args) => {
    const menu = `
╭━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━╮
┃      ✦ ASTRA MINI BOT ✦
┣━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┫
┃ 👤 User: ${msg.sender.replace('@s.whatsapp.net', '')}
┃ 📱 Mode: Public
┃ ⚡ Prefix: .
┃ 🌍 Status: Online
┃ 📦 Platform: Node.js
┃ 🖥 Server: Katabump
┃ ⏳ Runtime: Active
┣━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┫
┃ 👨‍💻 Developer: 𝐒𝚳𝚰𝐋𝚵
┃ ⚡ Powered By: ASTRA TECH
╰━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━╯

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
👑 OWNER MENU (15)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

➤ .addowner
➤ .delowner
➤ .restart
➤ .shutdown
➤ .backup
➤ .restore
➤ .broadcast
➤ .block
➤ .unblock
➤ .setprefix
➤ .setname
➤ .setbio
➤ .update
➤ .eval
➤ .exec

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
👥 GROUP MENU (15)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

➤ .kick
➤ .add
➤ .promote
➤ .demote
➤ .tagall
➤ .hidetag
➤ .welcome
➤ .goodbye
➤ .antilink
➤ .antidelete
➤ .mute
➤ .unmute
➤ .revoke
➤ .grouplink
➤ .groupinfo

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
📥 DOWNLOAD MENU (15)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

➤ .play
➤ .ytmp3
➤ .ytmp4
➤ .facebook
➤ .instagram
➤ .tiktok
➤ .spotify
➤ .twitter
➤ .mediafire
➤ .gdrive
➤ .pinterest
➤ .soundcloud
➤ .apk
➤ .video
➤ .audio

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🤖 AI & SEARCH MENU (15)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

➤ .ai
➤ .gpt
➤ .imagine
➤ .google
➤ .youtube
➤ .github
➤ .npm
➤ .weather
➤ .translate
➤ .lyrics
➤ .dictionary
➤ .news
➤ .wallpaper
➤ .anime
➤ .movie

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🛠 TOOLS MENU (15)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

➤ .sticker
➤ .toimg
➤ .tomp3
➤ .tovideo
➤ .qr
➤ .readqr
➤ .shorten
➤ .calc
➤ .fancy
➤ .removebg
➤ .enhance
➤ .screenshot
➤ .tourl
➤ .take
➤ .inspect

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
⚙️ SYSTEM MENU (15)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

➤ .menu
➤ .help
➤ .ping
➤ .alive
➤ .runtime
➤ .owner
➤ .support
➤ .script
➤ .uptime
➤ .stats
➤ .version
➤ .profile
➤ .settings
➤ .privacy
➤ .about

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Powered by ASTRA TECH
Created by 𝐒𝚳𝚰𝐋𝚵
    `;
    await smile.sendMessage(msg.jid, { text: menu });
  },
};