let handler = function (m) {
  // this.sendContact(m.chat, '6281212814187', 'zhicco', m)
  this.sendContact(m.chat, '0', 'Insert Owner Number Here', m)
}
handler.help = ['owner', 'creator']
handler.tags = ['info']

handler.command = /^(owner|creator)$/i

module.exports = handler
