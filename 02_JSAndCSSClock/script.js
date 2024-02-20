const secondHand = document.querySelector('.second-hand');
const minuteHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');
const tickSound = document.querySelector('audio');
const startButton = document.querySelector('.start');
const muteButton = document.querySelector('.mute');


// ----- Setting the initial angles of rotation to 0 -----
let sec = 0;
let min = 0;
let hr = 0;

// ----- Defining the intervals for seconds, minutes and hours -----
function definesIntervals () {
    secondsInterval = setInterval(rotateHand, 1000, 'seconds'); // 1000 miliseconds = 1 second
    minutesInterval = setInterval(rotateHand, 60000, 'minutes'); // 60000 miliseconds = 60 seconds = 1 minute
    hoursInterval = setInterval(rotateHand, 3600000, 'hours'); // 3600000 miliseconds = 3600 seconds - 60 minutes = 1 hour
}

// ----- Start, Stop and Restart button -----
startButton.addEventListener('click', () => {

    if (startButton.innerHTML === 'Start') {
       definesIntervals()
       startButton.innerHTML = 'Stop';
    } else if (startButton.innerHTML === 'Stop') {
        clearInterval(secondsInterval);
        clearInterval(minutesInterval);
        clearInterval(hoursInterval);
        startButton.innerHTML = 'Restart';
    } else if (startButton.innerHTML === 'Restart') {
        sec = 0;
        min = 0;
        hr = 0;
        secondHand.style.transform = 'rotate(0deg)';
        minuteHand.style.transform = 'rotate(0deg)';
        hourHand.style.transform = 'rotate(0deg)';
        startButton.innerHTML = 'Stop';
        definesIntervals();
    }

})

// ----- Rotates the hands of the clock at each defined interval -----
function rotateHand (time) {
   
    sec === 360 ? sec = 0 : ''; 
    min === 360 ? min = 0 : '';
    hr === 360 ? hr = 0 : '';

    if (time === 'seconds') {
        sec += 6; // 6 deg = 1 second
        secondHand.style.transform = `rotate(${sec}deg)`
        tickSound.play();
        console.log(sec)
    } else if (time === 'minutes') {
        min += 6;
        minuteHand.style.transform = `rotate(${min}deg)`
    } else if (time === 'hours') {
        hr += 6;
        hourHand.style.transform = `rotate(${hr}deg)`
    }

}

// ----- Mutes/Unmutes the tick sound of the clock -----
muteButton.addEventListener('click', () => {

    if(muteButton.innerHTML === 'Mute') {
        tickSound.muted = true;
        muteButton.innerHTML = 'Unmute';
    } else {
        tickSound.muted = false;
        muteButton.innerHTML = 'Mute';
    }

})
