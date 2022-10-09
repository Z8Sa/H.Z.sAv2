/**
   * Create By Dika Ardnt.
   * Recode By H.Z.sA
   * Contact Me on wa.me/6289677303455
   * Follow https://github.com/Bffsamakt
*/

const fs = require('fs')
const chalk = require('chalk')

// Website Api
global.APIs = {
	zenz: 'https://aldiansyaputra',
}

// Apikey Website Api
global.APIKeys = {
	'https://aldiansyaputra': '0e3eb157-fbd0-4166-bad9-5ecef74e8c32',
}

// Other
global.owner = ['6289677303455']
global.ownernomer = "6289677303455"
global.premium = ['6289677303455']
global.packname = 'By H.Z.sA'
global.author = 'H.Z.sA'
global.sessionName = 'nazedev'  //jangan diganti bro nanti error
global.prefa = ['','!','.','#','&']
global.sp = ''
global.mess = {
    success: 'Done',
    admin: 'Fitur Khusus Admin Group!',
    botAdmin: 'Bot Harus Menjadi Admin Terlebih Dahulu!',
    premime: 'Fitur Khusus Premium Kalo Mau Daftar Ketik Sewa',
    owner: 'Fitur Khusus Owner Bot',
    group: 'Fitur Digunakan Hanya Untuk Group!',
    private: 'Fitur Digunakan Hanya Untuk Private Chat!',
    bot: 'Fitur Khusus Pengguna Nomor Bot',
    wait: 'Loading...',
    endLimit: 'Limit Harian Anda Telah Habis, Limit Akan Direset Setiap Jam 12',
}
global.limitawal = {
    premium: "Infinity",
    free: 2
}
global.thumb = fs.readFileSync('./image/naze.jpg')
global.vaze = { url: 'https://telegra.ph/file/15209657f9d4f59c7ca1e.mp4' }

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
