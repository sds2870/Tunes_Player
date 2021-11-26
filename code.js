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

