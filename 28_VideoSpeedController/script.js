// ----- Importing elements from the DOM -----
const speedControl = document.querySelector('.speed');
const speedBar = document.querySelector('.speed-bar');
const video = document.querySelector('video');

// ----- Initializing control variables -----
const speedControlHeight = speedControl.clientHeight;
const speedControlTop = speedControl.offsetTop;
const maxPlaybackRate = 4;
const minPlaybackRate = 0.4;

// ----- Calculates the height of the speed bar and sets the playback rate -----
function controlVideoSpeed (e) {
    const mouseY = e.pageY;
    const speedBarHeight = mouseY - speedControlTop;

    speedBar.style.height = `${speedBarHeight}px`;

    const percentage = (speedBarHeight/speedControlHeight).toFixed(2);
    const videoPlaybackRate = ((percentage * (maxPlaybackRate - minPlaybackRate)) + minPlaybackRate).toFixed(2)

    video.playbackRate = videoPlaybackRate;
    speedBar.innerHTML = `${videoPlaybackRate}x`;
}

// ----- Event for mouse moving on the speed control element -----
speedControl.addEventListener('mousemove', controlVideoSpeed);


