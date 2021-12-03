let musicPlayer = document.createElement("div");
musicPlayer.className = "music_player";
document.body.append(musicPlayer);

let songTitle = document.createElement("h1");
songTitle.className = "song_name";
songTitle.innerHTML = "First Song";

let songArtist = document.createElement("p");
songArtist.className = "artist_name";
songArtist.innerHTML = "artist";
musicPlayer.append(songTitle, songArtist);

let diskCover = document.createElement("div");
diskCover.className = "disk play"

let songSeeker = document.createElement("div");
songSeeker.className = "song_seeker"

let rangeFinder = document.createElement("input");
rangeFinder.type = "range";
rangeFinder.value = "0"
rangeFinder.className = "seek_bar";

let songTime = document.createElement("span")
songTime.className = "current_time";
songTime.innerHTML = "00:00";
let songLength = document.createElement("span")
songLength.className = "song_duration";
songLength.innerHTML = "00:00"

songSeeker.append(rangeFinder, songTime, songLength);
musicPlayer.append(diskCover, songSeeker);

let playerControls = document.createElement("div");
playerControls.className = "controls";

let flashBack = document.createElement("button");
flashBack.className = "btn backward_btn";
let backImage = document.createElement("img");
backImage.src = "images/media-previous_button.png";
flashBack.innerHTML = `${backImage}`

let buttonSelect = document.createElement("button");
buttonSelect.className = "play_btn pause";
let buttonSpanOne = document.createElement("span");
let butonSpanTwo = document.createElement("span");
buttonSelect.append(buttonSpanOne, butonSpanTwo);

let flashForward = document.createElement("button");
flashForward.className = "btn forward_btn";
let forwardImage = document.createElement("img");
forwardImage.src = "images/next_button.png";
flashForward.innerHTML = `${forwardImage}`

playerControls.append(flashBack, buttonSelect, flashForward);

let audioSource = document.createElement("audio");
audioSource.src = "";
audioSource.setAttribute("id", "audio");

musicPlayer.append(playerControls, audioSource);
