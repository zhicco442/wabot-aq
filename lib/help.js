const help = (pushname, prefix, botName, ownerName, reqXp, getLevelingLevel, sender, _registered, uangku) => {
        return `🔰 -----[ *MENU ${MR.CHANNER BOT}* ]----- 🔰
┏━━━━━━━━━━━━━━━━━━━━┓
┃╭───────────────────
┃│◪ NAMA : ${pushname}
┃│◪ UANG : Rp:${uangku}
┃│◪ XP : ${reqXp}
┃│◪ LEVEL : ${getLevelingLevel(sender)}
┃│◪ USER ${botName} : ${_registered.length}
┃╰───────────────────
┗━━━━━━━━━━━━━━━━━━━━┛

┏━━━━━━━━━━━━━━━━━━━━┓
┃╭──────────────────
┃│❏ *${prefix}info*
┃│❏ *${prefix}ping*
┃│❏ *${prefix}donasi*
┃│❏ *${prefix}owner*
┃├───────────────────
┃│❏ *${prefix}simplemenu*
┃│❏ *${prefix}makermenu*
┃│❏ *${prefix}gabutmenu*
┃│❏ *${prefix}downloadmenu*
┃│❏ *${prefix}randommenu*
┃│❏ *${prefix}dompetmenu*
┃│❏ *${prefix}othermenu*
┃│❏ *${prefix}groupmenu*
┃│❏ *${prefix}soundmenu*
┃│❏ *${prefix}premiummenu*
┃│❏ *${prefix}ownermenu*
┃╰───────────────────
┗━━━━━━━━━━━━━━━━━━━━┛
🔰 -----[ *POWERED BY ${Zhicco bot}* ]----- 🔰`
}
exports.help = help
