// ----- Importing the elements from the DOM -----
const video = document.querySelector('video');
const playButton = document.querySelector('[title="Toggle Play"]');
const volumeAndSpeedInput = document.querySelectorAll('input');
const backSkipButton = document.querySelectorAll( '[data-skip]');
const progressBar = document.querySelector('.progress__filled');
const progressContainer = document.querySelector('.progress');

// ----- Play/Pause event -----
playButton.addEventListener('click', () => {

    if (video.paused) {
        video.play();
        definesInterval();
        playButton.innerHTML = '&#10073;&#10073;'
    } else {
        video.pause();
        clearInterval(timeInterval);
        playButton.innerHTML = '&#9658'
    }
})

// ----- Filling the progress bar according to the current time of the video -----
function definesInterval () {
    timeInterval = setInterval(fillsProgressBar, 500);
}

function fillsProgressBar () {
    let percentage = (video.currentTime / video.duration) * 100;
    progressBar.style.flexBasis = `${percentage}%`
}

// ----- Volume and PlayrbackRate event -----
volumeAndSpeedInput.forEach(element => element.addEventListener('change', e => {
    volumeAndPlaybackRate = e.target.value;
    e.target.name === 'volume' ? video.volume = volumeAndPlaybackRate : video.playbackRate = volumeAndPlaybackRate
}))

// ----- Rewind or advance video event -----
backSkipButton.forEach(element => element.addEventListener('click', e => {
    let videoCurrentTime = video.currentTime;
    let backOrForward = Number(e.target.getAttribute('data-skip'));
    video.currentTime = videoCurrentTime + backOrForward;
}))

// ----- Changing the video current time as progressbar is scrubbed -----
function scrubsProgressBar (e) {
    let percentage = (e.offsetX / progressContainer.offsetWidth) * 100;
    progressBar.style.flexBasis = `${percentage}%`
    video.currentTime = (percentage * video.duration) / 100;
}

// ----- Progress bar click and scrub events -----
let isMouseDown = false;
progressContainer.addEventListener('click', scrubsProgressBar)
progressContainer.addEventListener('mousedown', () => isMouseDown = true);
progressContainer.addEventListener('mouseup', () => isMouseDown = false);
progressContainer.addEventListener('mousemove', e => isMouseDown ? scrubsProgressBar(e) : '');
