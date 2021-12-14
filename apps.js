let currentMelody = 0;

const music = document.querySelector("#audio");

const barSeeker = document.querySelector("song_seeker");
const songName = document.querySelector("song_name");
const nameArtist = document.querySelector("artist_name");
const disk = document.querySelector(".disk");
const currentTime = document.querySelector(".current_time");
const musicDuration = document.querySelector(".song_duration");
const playBtn = document.querySelector(".play_btn");
const forwardBtn = document.querySelector(".forward_btn");
const backwardBtn = document.querySelector(".backward_btn");

const setMusic = (index) => {
    barSeeker.value = 0;
    let melody = melodies[index];
    currentMelody = index;
    music.src = melody.path;

    songName.innerHTML = melody.name;
    nameArtist.innerHTML = melody.artist;
    disk.style.backgroundImage = `url("${melody.cover}")`;

    currentTime.innerHTML = "00:00";
    setTimeout(() => {
        barSeeker.max = music.duration;
        musicDuration.innerHTML = formatTime(music.duration);
    }, 300);
}

setMusic(0);

const timeFormat = (time) => {
    let minute = Math.floor(time / 60);
    if (minute < 10) {
        minute = `0${minute}`;
    }
    let second = Math.floor(time % 60);
    if (second < 10) {
        second = `0${second}`;
    }
    return `${minute} : ${second}`;
}

playBtn.addEventListener("click", () => {
    if (playBtn.className.includes("pause")) {
        music.play()
    } else {
        music.pause();
    }
    playBtn.classList.toggle("pause");
    disk.classList.toggle("play");
})

setInterval(() => {
    barSeeker.value = music.currentTime;
    currentTime.innerHTML = timeFormat(music.currentTime)
    if (Math.floor(music.currentTime) === Math.floor(barSeeker.max)) {
        forwardBtn.click();
    }
}, 500)

barSeeker.addEventListener("change", () => {
    music.currentTime = barSeeker.value;
})

forwardBtn.addEventListener("click", () => {
    if (currentMelody >= melodies.length - 1) {
        currentMelody = 0;
    } else {
        currentMelody += 1;
    }
    setMusic(currentMelody);
    playMusic();
});

backwardBtn.addEventListener("click", () => {
    if (currentMelody <= 0) {
        currentMelody = 0;
    } else {
        currentMelody -= 1;
    }
    setMusic(currentMelody);
    playMusic();
})

const playMusic = () => {
    music.play();
    playBtn.classList.remove("pause");
    disk.classList.add("play");
}