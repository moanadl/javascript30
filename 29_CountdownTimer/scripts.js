// ----- Importing elements from the DOM -----
const timeButtons = document.querySelectorAll('.timer__button');
const timeLeft = document.querySelector('.display__time-left');
const endTime = document.querySelector('.display__end-time');
const inputMinutes = document.querySelector('form');

// ----- Initializing variable from setInterval -----
let timer;

// ----- Sets one second to refresh the timer and defines for how long the timer will run -----
function setTimer (secondsEntered) {

    clearInterval(timer); // If there is a interval active, it will clear it

    const currentTime = Date.now(); // Current date in miliseconds
    const futureTime = currentTime + (secondsEntered * 1000); // // Current date + seconds entered by user, in miliseconds
    
    // ----- Calling functions to display timer on screen -----
    showTimeLeft(secondsEntered);
    showFutureTime(futureTime);

    // ----- Sets interval of one second and calculates total of seconds to run it -----
    timer = setInterval(() => {
        const secondsCount = Math.round((futureTime - Date.now()) / 1000); // Diferença do tempo futuro para o tempo atual (segundos que faltam), em segundos
        // ----- Checking if timer should stop already -----
        if (secondsCount < 0) {
            clearInterval(timer);
            return;
        }
        showTimeLeft(secondsCount);
    }, 1000);  

}

// ----- Displays time left on screen -----
function showTimeLeft (secondsEntered) {
    const minutesLeft = Math.floor(secondsEntered / 60); // Seconds ---> minutes
    const secondsLeft = secondsEntered % 60; // Seconds left
    const timeDisplayed = timeLeft.innerHTML = `${minutesLeft >= 10 ? minutesLeft : `0${minutesLeft}`}:${secondsLeft >= 10 ? secondsLeft : `0${secondsLeft}`}`;
    document.title = timeDisplayed; // Displaying time as document title also
}

// ----- Displays time that timer will end -----
function showFutureTime (futureTime) {
    const date = new Date(futureTime); // futureTime in miliseconds
    const hourEnd = date.getHours();
    const minutesEnd = date.getMinutes();
    endTime.innerHTML = `${hourEnd}:${minutesEnd >= 10 ? minutesEnd : `0${minutesEnd}`}`
}

// ----- Gets minutes typed by user on input -----
function typeMinutes (e) {
    e.preventDefault();
    const minutesTyped = parseFloat(this.minutes.value); // Video insight

    // ----- Checking if user typed a number -----
    if (isNaN(minutesTyped)) {
        alert('Please, enter a number');
        this.minutes.value = '';
        return; 
    }

    const secondsTyped = minutesTyped * 60; // Minutes ---> seconds
    setTimer(secondsTyped);
    this.minutes.value = '';
}

// ----- Transforms string from option clicked in number -----
function defineMinutes () {
    const secondsEntered = parseInt(this.dataset.time); // Video insights
    setTimer(secondsEntered);
}

// ----- Event listeners -----
timeButtons.forEach(button => button.addEventListener('click', defineMinutes));
inputMinutes.addEventListener('submit', typeMinutes)
