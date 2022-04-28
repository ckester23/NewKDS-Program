// JavaScript file for shotokai project
// string 'hello' character "h"
// false = 0, "", NaN, null, and undefined when used in bools

let stances = [ Seiza = "Seiza.mp3",
	Hachiji_dachi = "Hachiji_dachi.mp3",
	Kiba_dachi = "Kiba_dachi.mp3",
	Zenkutsu_dachi = "Zenkutsu.mp3",
	Kokutsu_dachi = "Kokutsu_dachi.mp3",
	Fudo_dachi = "Fudo_dachi.mp3" ]

let hand_techniques = [ Oi_tsuki = "Oi_tsuki.mp3",
	Mae_te_tsuki = "Mae_te_tsuki.mp3",
	Gyaku_tsuki = "Gyaku_tsuki.mp3",
	Uraken = "Uraken",
	Empi = "Empi",
	Shomen_uchi = "Shomen Uchi",
	Yokomen_uchi = "Yokomen Uchi",
	Tetsui = "Tetsui",
	Morote_tsuki = "Morote Tsuki",
	Yama_tsuki = "Yama Tsuki" ]

let kicks = [ Mae_geri = "Mae_geri.mp3",
	Yoko_geri_kekomi = "Yoko_geri_kekomi.mp3",
	Yoko_geri_keage = "Keage",
	Fumikomi = "Fumi_komi.mp3",
	Mawashi_geri = "Mawashi",
	Mikazuki_geri = "Mikazuki",
	Aori_geri = "Aori",
	Nami_gaeshi = "Nami Gaeshi",
	Hiza_tsuchi = "Hiza Tsuchi",
	Nidan_geri = "Nidan" ]

let blocks = [ Gedan_barai = "Gedan_barai.mp3",
	Teisho_barai = "teisho_barai.mp3",
	Udi_uke = "Udi_uke.mp3",
	Uchikomi = "Uchikomi.mp3",
	Age_uke = "Age_uke.mp3",
	Shuto_uke = "Shuto Uke",
	Shuto_barai = "Shuto Barai",
	Morote_uke = "Morote Uke" ]

let general = [ T_ShodanTate_tsuki = "Tate_tsuki",
	Seiken = "Seiken",
	Hiki_te = "Hiki_te.mp3",
	Gedan = "Gedan",
	Chudan = "Chudan",
	Jodan = "Jodan",
	Irimi = "Irimi.mp3" ]

let Taikyoku = [ T_Shodan = "Taikyoku_Shodan.mp3",
	T_Nidan = "Taikyoku_Nidan.mp3",
	T_Sandan = "Taikyoku_Sandan.mp3" ]

let Heian = [ H_Shodan = "Heian_Shodan.mp3",
	H_Nidan = "Heian_Nidan.mp3",
	H_Sandan = "Heian_Sandan.mp3" ]

let Tekki = [ Te_Shodan = "Tekki_Shodan.mp3" ]

let redStances = [Seiza, Kiba_dachi, Zenkutsu_dachi, Kokutsu_dachi, Fudo_dachi]
let redHands = [Oi_tsuki]
let redKicks = [Mae_geri]
let redBlocks = [Gedan_barai, Udi_uke]
let redGeneral  [Hiki_te]

let redKata = Taikyoku + H_Shodan

let redExercise = redStances + redHands + redKicks + redBlocks + redGeneral


let orangeStances = redStances
let orangeHands = [Gyaku_tsuki]
let orangeKicks = [Fumikomi, Yoko_geri_kekomi]
let orangeBlocks = [Teisho_barai, Age_uke, Uchikomi]
let orangeGeneral = [Irimi]

let orangeKata = [Heian, Te_Shodan]

let orangeExercise = orangeStances + orangeHands + orangeKicks + orangeBlocks + orangeGeneral


function printItem(mp3_str) {
	let str_arr = mp3_str.split(".");
	let out_str = str_arr[0]
	console.log(out_str)
}

function playSound(url) {
    let a = new Audio(url);
    a.play();
}

function getRandIndex(n) {
	// Integrate later
	Math.floor(Math.random() * n);
}

function doExercise(beltExercise) {
	let n = beltExercise.length;

	for (let i = 0; i < n; i++) {
		let item = beltExercise[i];
		setTimeout(() => {  printItem(item); }, 2000);
	}
}

doExercise(redStances);