let handler = async m => m.reply(`
const donasi = (pushname, prefix, botName, ownerName) => { 
	return `Hallo, ${pushname} 👋
Mau donasi ya kak ✨
 اتَّقوا النَّارَ ولو بشقِّ تمرةٍ ، فمن لم يجِدْ فبكلمةٍ طيِّبةٍ
_“jauhilah api neraka, walau hanya dengan bersedekah sebiji kurma (sedikit). Jika kamu tidak punya, maka bisa dengan kalimah thayyibah” [HR. Bukhari 6539, Muslim 1016]_
╔════════════════════
║ *DONASI UNTUK ${*MR.CHAINNERBOT}
╠════════════════════
║╭──❉ *DONASI BOS* ❉─────
║│➸ *OVO*:
║│➸ *DANA*: _0882-8982-4963_
║│➸ *PULSA*: _0882-8982-4963_
║│➸ *GOPAY*: _0882-8982-4963_
║╰──────────────────
╠════════════════════
║         ${ZHICCO BOT}
║  ▌│█║▌║▌║║▌║▌║█│▌
║  ▌│█║▌║▌║║▌║▌║█│▌
║         ${ZHICCO BOT}
╠════════════════════
║ _*POWERED BY ${Zhicco BOT}*_
╚════════════════════`
}

exports.donasi = donasi

`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
