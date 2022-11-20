// DOM element selectors
const video = document.getElementById('videoplayer');
const playButton = document.getElementById("play");
const pauseButton = document.getElementById("pause");
const slowButton = document.getElementById("slower");
const fastButton = document.getElementById("faster");
const skipButton = document.getElementById("skip");
const muteButton = document.getElementById("mute");
const slider = document.getElementById("slider");
const volume = document.getElementById("volume");

// global variables
let mute;
let volumeOfVideo;


const clickPlay = () => {
    video.play();
}

const clickPause = () => {
    video.pause();
}

const slowClick = () => {
    if(video.playbackRate == 0.5){
        alert("videoeo is at slowest speed!");
        return;
    }
    video.playbackRate = video.playbackRate*0.5
}

const fastClick = () => {
    if(video.playbackRate == 2){
        alert("videoeo is at fastest speed!");
        return;
    }
    video.playbackRate = video.playbackRate*2
}

const skipClick = () => {
    if (video.currentTime + 15 > video.duration) video.currentTime = 0;
    else video.currentTime += 15;
}

const muteClick = () => {
    video.muted = !video.muted;
    muteButton.textContent = video.muted ? 'Unmute' : 'Mute';
    if (!video.muted && volumeOfVideo <= 0) volumeOfVideo = 1;
    volume.textContent = `${video.muted ? 0 : volumeOfVideo*100}%`;
    slider.value = video.muted ? 0 : volumeOfVideo*100;
    video.volume = video.muted ? 0 : volumeOfVideo;
}

const onSlideVolume = () => {
    volumeOfVideo = slider.value/100;
    volume.textContent = slider.value;
    video.volume = volumeOfVideo;
    muteButton.textContent = `${video.muted ? 0 : volumeOfVideo*100}%`;
    video.muted = volumeOfVideo <= 0;
    muteButton.textContent = video.muted ? 'Unmute' : 'Mute';
}

// event listeners
playButton.addEventListener('click', clickPlay);
pauseButton.addEventListener('click', clickPause);
slowButton.addEventListener('click', slowClick);
fastButton.addEventListener('click', fastClick);
skipButton.addEventListener('click', skipClick);
muteButton.addEventListener('click', muteClick);
slider.addEventListener('input', onSlideVolume);

// call when page loaded
volumeOfVideo = slider.value/100;
volume.textContent = `${video.muted ? 0 : volumeOfVideo*100}%`;

video.autoplay = false;
video.loop = false;
video.playbackRate = speed;
video.muted = mute;
video.volume = volumeOfVideo / 100.0;
onSlideVolume();