let vibrate = document.querySelector('#vibrate');
let loseyourself = document.querySelector('#lose_yourself');

let levelup = document.querySelector('#level_up');
let happynow = document.querySelector('#happy_now');

let songname = document.querySelector('#song_name');
let download = document.querySelector('#download');
let standard = document.querySelector('#standard');
let deluxe = document.querySelector('#deluxe');
let playi = document.querySelector('#playi');
let songs = document.querySelector('#songs');
let named;




   
  
var audio = new Audio("Petey_Pablo_Rasheeda_-_Vibrate_70720974.mp3");

window.onload = function() {
   audio.play();
}

document.body.addEventListener('mousemove', () => {
    audio.play();
})



songs.addEventListener('click', () => {
   
   
    if(window.innerWidth < 1100) {
document.getElementById('left').style.display = "flex";
document.getElementById('playi').style.display = "none";
    }
})
    

   



document.getElementById('standard').style.background = "linear-gradient(0deg, rgba(0,123,255,1) 0%, rgba(0,0,0,1) 30%)";

document.getElementById('scroll').style.display = "none";

document.getElementById('song_name').innerHTML = "VIBRATE";
document.getElementById('song_author').innerHTML = "Petey Pablo";
document.getElementById('song_img').src="15703998.png";
document.getElementById('notes').innerHTML = "692";
    document.getElementById('duration').innerHTML = "2:17";
named = "vibrate";





levelup.addEventListener('click', (event) => {
    document.getElementById('song_name').innerHTML = "LEVEL UP";
    document.getElementById('song_author').innerHTML = "Beatstar Originals";
    document.getElementById('song_img').src="391.png";
    document.getElementById('notes').innerHTML = "872";
    document.getElementById('duration').innerHTML = "2:13";
    named = "levelup1";
    audio.pause();
    audio.currentTime = 0;
    audio = new Audio('audio-_4_.wav');
    audio.play();
if(window.innerWidth < 1100) {
    document.getElementById('left').style.display = "none";
    document.getElementById('playi').style.display = "flex";
}

})

happynow.addEventListener('click', (event) => {
    document.getElementById('song_name').innerHTML = "HAPPY NOW";
    document.getElementById('song_author').innerHTML = "Kygo";
    document.getElementById('song_img').src="m1000x1000.jfif.png";
    document.getElementById('notes').innerHTML = "1030";
    document.getElementById('duration').innerHTML = "3:26";
    named = "happynow2";
    audio.pause();
    audio.currentTime = 0;
    audio = new Audio('kygo-feat.-sandro-cavazza-happy-now.mp3');
    audio.play();
    if(window.innerWidth < 1100) {
        document.getElementById('left').style.display = "none";
        document.getElementById('playi').style.display = "flex";
    }
})

vibrate.addEventListener('click', (event) => {
    document.getElementById('song_name').innerHTML = "VIBRATE";
    document.getElementById('song_author').innerHTML = "Petey Pablo";
    document.getElementById('song_img').src="15703998.png";
    document.getElementById('notes').innerHTML = "692";
    document.getElementById('duration').innerHTML = "2:19";
    named = "vibrate";
    audio.pause();
    audio.currentTime = 0;
    audio = new Audio('Petey_Pablo_Rasheeda_-_Vibrate_70720974.mp3');
    audio.play();
    if(window.innerWidth < 1100) {
        document.getElementById('left').style.display = "none";
        document.getElementById('playi').style.display = "flex";
    }
})

loseyourself.addEventListener('click', (event) => {
    document.getElementById('song_name').innerHTML = "LOSE YOURSELF";
    document.getElementById('song_author').innerHTML = "Kygo";
    document.getElementById('song_img').src="1200x1200bf-60.png";
    document.getElementById('notes').innerHTML = "567";
    document.getElementById('duration').innerHTML = "2:16";
    named = "loseyourself";
    audio.pause();
    audio.currentTime = 0;
    audio = new Audio('eminem-lose-yourself(mp3bit (mp3cut (mp3cut.net).mp3');
    audio.play();
    if(window.innerWidth < 1100) {
        document.getElementById('left').style.display = "none";
        document.getElementById('playi').style.display = "flex";
    }
})

download.addEventListener('click', () => {
if(named == "levelup1"){
    document.getElementById('download').href = "https://cdn.discordapp.com/attachments/1090180158570377226/1113875224455291010/Level_Up.zip";
} else if (named == "happynow2"){
    document.getElementById('download').href = "https://cdn.discordapp.com/attachments/1090180158570377226/1113123877564973177/Happy_Now.zip";
} else if (named == "vibrate"){
    document.getElementById('download').href = "https://cdn.discordapp.com/attachments/1090180158570377226/1113123877204279306/Vibrate_feat._Rasheeda.zip";
} else if (named == "loseyourself"){
    document.getElementById('download').href = "https://cdn.discordapp.com/attachments/1090180158570377226/1113123877963440138/Lose_Yourself.zip";
}
})


standard.addEventListener('click', (event) => {
    document.getElementById('scroll').style.display = "none";
    document.getElementById('scrollstan').style.display = "block";
    document.getElementById('standard').style.background = "linear-gradient(0deg, rgba(0,123,255,1) 0%, rgba(0,0,0,1) 30%)";
    document.getElementById('deluxe').style.background = null;
})

deluxe.addEventListener('click', (event) => {
    document.getElementById('scrollstan').style.display = "none";
    document.getElementById('scroll').style.display = "block";
    document.getElementById('deluxe').style.background = "linear-gradient(0deg, rgba(150,77,0,1) 0%, rgba(0,0,0,1) 30%)";
    document.getElementById('standard').style.background = null;
})
window.addEventListener('resize', () => {
if(window.innerWidth > 1100) {
    document.getElementById('left').style.display = "flex";
    document.getElementById('playi').style.display = "flex";
} else {
    document.getElementById('left').style.display = "none";
}
})
