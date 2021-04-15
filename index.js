console.log('Starting...')
let { spawn } = require('child_process')
let path = require('path')
let fs = require('fs')
let package = require('./package.json')
const CFonts  = require('cfonts')
CFonts.say('welcome\ to Bot mr.chainner/1101000101100100110100111000100011110101000111101000010001100000110010100101110011011011011111001010010110001101111000001011100011
0111011011010001011010101011000110000110110111011001110110010010101101000011100101111001011110000111111011001011010000000001011110
0101001000111111100110001011110011001111010010010100000001000111101111011010010010101000100010101000101100111110110111000001001101
1100010110000101111011110000010010111010001010000010110101110100010001011100011000111111001010010111100101000101000110111100110101
0100011001000100000100011111111111010010100000110100001111100010100001000001100000001000110011111110010011100100111100010110011100
0010000000100110101100011100101010101000010010100011100001010110101110010000110111100111111010010001000000001000110001110011010000
1111001010001001111011110101100101010101111010101101111000110101011111000000100001100011000101010110000000110001000101000010010001
0001010010101111010100111110010111011111010011011111000000010001010110001000010100011010010001000001001010010110011000001110101000
0000111111110101111011110000000000000010100010100011101001010110110110011000010011111001110000100100100101110010100110000101111110
0111110010011011100100001000011111000000010000000100010000100111000010010100001001111100100010000010010101100010100011001011011010
1110011100000011001111100100011111100000101010101011101101000110001100011111010010001101100001001111010000100101011011001100110111
0111011100101111011011001000000010011110001100110110110001110000010101000101000100111000011011111100110011110000101000001111010110
1101010101100010101001000001010100011100101011010101011111011110011001000000111000111001111110000000100110000100110100010000111101
1111110001011001011010001100100110011111101110110100111100000111111011110000111010001101001101001101111001111111110100100001011100
0010100010001110101010100101111000000001001110111011011001001101100111110110010000010111101000010101010111011110010100101100001110
1100000110001101001100100011100110111000000100110001111100100001111000010001001000011100110010111111010010011000111101101100011110
1001111100101110000110001100001001110111110001011110101001110100000111111100111001110101110111100111011100101110111101001000110111
1101100101000111101010010111011101000000000111011011110001100110101111010100100100100000001101010101100100110100001001010000100001
0101000101111000111001010111110011000011000100100111000001110001111001111110010000100111011110000010101111001000100110110100001101
0101010010110101011101011011110000000100010011111111101101111100000111001011100000100110100101101100001100101000001101001011010100
1101010100010011010110010101011011110011000111111100010110111000011011010010001111101110111100110011000100100110011011001100000010
1011110010111100100110101001100010010011010001101000100111111101000000100100011001101101100111010101011110101011010011000100011000
1001010011100100000001011001001000110010010110101010100000010111110010110100010101001101111001111010111101111101101010010110100100
0110101011100110001010000011111100011000111011101110110100100100010011011011110110010000111111000000101111000010110011110010101000
1100001011000100011111011011101001111110101111111101001101011010011000111010010110111000011000110011111011011011101000011000101110
0000011011110100100111010000000110000101011010011010111001101001000111111110111011000001111111011101011100001101001101111010111100
0101001011100001111010101000000010110001110011011010101100111010010000011101010100000011000011000000111001111000110001011000000001
1011110100101010001011110110010101010011111110011111110010011001011011101001101011010111101101101011010101011000101110110110111010
0000110010101010110111000101001000100001000111100100000011111011101010100100000010000111011101001000100011001101010110110001000101
1101111001100000100100110001101010001001110110110111010100110101010010110010001100001111111101010010000101010111111111100110101000
0001110101010011101001111011010000110000100011101010101001000100101110001000011101110111101100101011001010010110110101010111010110

Rendering time: 1 seconds.
', {
  font: 'chrome',
  align: 'center',
  gradient: ['red', 'magenta']
})
CFonts.say(`'${package.name}' By @${package.author.name || package.author}`, {
  font: 'console',
  align: 'center',
  gradient: ['red', 'magenta']
})
bot.distube = new DisTube(bot, { searchSongs: false, emitNewSongOnly: true });
bot.distube
    .on("playSong", (message, queue, song) => message.channel.send(
        `Playing \`${song.name}\` - \`${song.formattedDuration}\`\nRequested by: ${song.user}`
	))
	.on("addSong", (message, queue, song) => message.channel.send(
        `Added ${song.name} - \`${song.formattedDuration}\` to the queue by ${song.user}`
    ))

/**
 * Start a js file
 * @param {String} file `path/to/file`
 */
function start(file) {
  let args = [path.join(__dirname, file), ...process.argv.slice(2)]
  CFonts.say([process.argv[0], ...args].join(' '), {
    font: 'console',
    align: 'center',
    gradient: ['red', 'magenta']
  })
  let p = spawn(process.argv[0], args, {
    stdio: ['inherit', 'inherit', 'inherit', 'ipc']
  })
  p.on('message', data => {
    console.log('[RECEIVED]', data)
    switch (data) {
      case 'reset':
        p.kill()
        start.apply(this, arguments)
        break
      case 'uptime':
        p.send(process.uptime())
        break
    }
  })
  p.on('exit', code => {
    console.error('Exited with code:', code)
    if (code === 0) return
    fs.watchFile(args[0], () => {
      fs.unwatchFile(args[0])
      start(file)
    })
  })
  // console.log(p)
}

start('main.js')
