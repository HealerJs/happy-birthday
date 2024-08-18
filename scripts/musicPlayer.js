let musics = [
  {
    title: "Make Love",
    artist: "Mashki",
    cover: "assets/images/MeshkiMakeLove.jpg",
    audio: new Audio("assets/musics/MeshkiMakeLove.mp3")
 },
  {
    title: "Nagahan va baraye hamishe",
    artist: "Mashki",
    cover: "assets/images/MeshkiNagahanvabarayehamishe.jpg",
    audio: new Audio("assets/musics/MeshkiNagahanvabarayehamishe.mp3")
 }
];

let musicTitle = document.getElementById("musicTitle");

let musicArtist = document.getElementById("musicArtist");

let musicCover = document.getElementById("musicImg");

let musicImgGrand = document.getElementById("musicImgGrand")

let musicTime = document.getElementById("music-time");
let preBtn = document.getElementById("back-btn");

let playBtn = document.getElementById("play-btn");

let nextBtn = document.getElementById("next-btn");

let downloadBtn = document.getElementById("downloadBtn");

let currentMusic = 0;

let musicData = musics[currentMusic];
let audio = musicData.audio;


musicTitle.innerText = musicData.title;
musicArtist.innerHTML = musicData.artist;
musicCover.src = musicData.cover;
downloadBtn.href = musicData.audio.src

audio.addEventListener("canplay", () => {
  musicTime.max = audio.duration;
})

audio.addEventListener("timeupdate", () => {
  musicTime.value = audio.currentTime;
  
})

musicTime.addEventListener("input", () => {
  audio.currentTime = musicTime.value;
})


playBtn.addEventListener("click", () => {
  if (audio.paused) {
    audio.play();
    playBtn.innerHTML = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
      <path d="M48 64C21.5 64 0 85.5 0 112L0 400c0 26.5 21.5 48 48 48l32 0c26.5 0 48-21.5 48-48l0-288c0-26.5-21.5-48-48-48L48 64zm192 0c-26.5 0-48 21.5-48 48l0 288c0 26.5 21.5 48 48 48l32 0c26.5 0 48-21.5 48-48l0-288c0-26.5-21.5-48-48-48l-32 0z"/>
    </svg>
    `
    musicImgGrand.style.animationPlayState = "running";
  } else {
    audio.pause();
    playBtn.innerHTML = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
       <path d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80L0 432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z"/>
       </svg>
    `
    musicImgGrand.style.animationPlayState = "paused";
  }
})

preBtn.addEventListener("click", () => {
  changeMusic("pre");
})

nextBtn.addEventListener("click", () => {
  changeMusic("next");
})

function changeMusic(s) {
  let musicCount = musics.length;
  audio.currentTime = 0;
  audio.pause();
  if (s == "next") {
    if (currentMusic == musicCount - 1)
      currentMusic = 0;
    else
      currentMusic += 1;
  } else {
    if (currentMusic == 0)
      currentMusic = musicCount - 1;
    else
      currentMusic -= 1;
  }
  musicData = musics[currentMusic];
  audio = musicData.audio;
  musicTitle.innerHTML = musicData.title;
  musicArtist.innerHTML = musicData.artist;
  musicCover.src = musicData.cover;
  downloadBtn.href = musicData.audio.src
  
  audio.addEventListener("canplay", () => {
    musicTime.max = audio.duration;
  });

  audio.addEventListener("timeupdate", () => {
    musicTime.value = audio.currentTime;
  });
  musicImgGrand.style.animationPlayState = "running";
  audio.play();
  playBtn.innerHTML = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
      <path d="M48 64C21.5 64 0 85.5 0 112L0 400c0 26.5 21.5 48 48 48l32 0c26.5 0 48-21.5 48-48l0-288c0-26.5-21.5-48-48-48L48 64zm192 0c-26.5 0-48 21.5-48 48l0 288c0 26.5 21.5 48 48 48l32 0c26.5 0 48-21.5 48-48l0-288c0-26.5-21.5-48-48-48l-32 0z"/>
    </svg>`;
}
