console.log("Welcome to music world");

let songIndex = 0;
let audioElement = new Audio('songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let songItems = Array.from(document.getElementsByClassName('songItem'));

let songs = [
    { songName: "Halka Halka", filePath: "songs/1.mp3", coverPath: "halka halka.jpg" },
    { songName: "Tera Naam", filePath: "songs/2.mp3", coverPath: "Tera naam.jpg" },
    { songName: "Tera Ghata", filePath: "songs/3.mp3", coverPath: "Tera Ghata.jpg" },
    { songName: "Hawayein", filePath: "songs/4.mp3", coverPath: "hawieyan.jpg" },
    { songName: "Tom and jerry", filePath: "songs/5.mp3", coverPath: "tnj.jpg" },
    { songName: "Tera yaar hoon mai", filePath: "songs/6.mp3", coverPath: "tera yaar hu mai.jpg" },
    { songName: "Feelings", filePath: "songs/7.mp3", coverPath: "feelings.jpg" },
    { songName: "Saude bazi", filePath: "songs/8.mp3", coverPath: "saude bazi.jpg" },
    { songName: "Rabbta", filePath: "songs/9.mp3", coverPath: "Rabbta.jpg" },
]

songItems.forEach((element, i) => {
    element.getElementsByTagName("img")[0].scr = songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
})


masterPlay.addEventListener('click', () => {
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    }
    else {
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
    }
})

audioElement.addEventListener('timeupdate', () => {
    progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
    myProgressBar.value = progress;
})

myProgressBar.addEventListener('change', () => {
    audioElement.currentTime = myProgressBar.value * audioElement.duration / 100;
})


const makeAllPlays = () => {
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
    element.addEventListener('click', (e) => {
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src = `songs/${songIndex + 1}.mp3`;
        //masterSongName.innerText = songs[songIndex].songName; 
        audioElement.currentTime = 0;
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    })
})

document.getElementById('next').addEventListener('click', () => {
    if (songIndex >= 8) {
        songIndex = 0
    }
    else {
        songIndex += 1;
    }
    audioElement.src = `songs/${songIndex + 1}.mp3`;
    //masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');

})

document.getElementById('previous').addEventListener('click', () => {
    if (songIndex <= 0) {
        songIndex = 0
    }
    else {
        songIndex -= 1;
    }
    audioElement.src = `songs/${songIndex + 1}.mp3`;
    //masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})