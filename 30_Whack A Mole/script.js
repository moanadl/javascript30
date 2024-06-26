// ----- Importing holes, moles and score board elements from the DOM -----
const holes = document.querySelectorAll('.hole');
const scoreBoard = document.querySelector('.score');
const moles = document.querySelectorAll('.mole');

// ----- Initializing control variables -----
let elapsedTime;
let lastHole;
let score;
const gameTime = 15;
const minimumTime = 500; // miliseconds
const maximumTime = 1000; // miliseconds


// ----- Starts/resets the game, the elapsed time, the score and the score board -----
function startGame () {
    elapsedTime = 0;
    score = 0;
    scoreBoard.innerHTML = 0;
    displayMoles() 
}

// ----- Calls the function to define the hole the mole will show and the time it will take to hide -----
function displayMoles () {    
    // ----- Random hole -----
    const currentHole = randomHole();
    // ----- Random down time -----
    const timeDown = randomTime(minimumTime, maximumTime);
    
    currentHole.classList.add('up');

    // ----- Sets interval for mole to hide -----
    moleDownInterval = setInterval( () => {
        hideMole(currentHole);
        elapsedTime++
    }, timeDown);
    
}

// ----- Hides the mole and controls the game duration -----
// ----- Calls the function to show de mole again -----
function hideMole (currentHole) {
    currentHole.classList.remove('up');
    clearInterval(moleDownInterval);
    
    // ----- Game duration -----
    if (elapsedTime >= gameTime) {
        clearInterval(moleDownInterval)
        return
    } 

    displayMoles();
}

// ----- Generates a random index for the holes -----
function randomHole () {
    const index = Math.floor(Math.random() * (holes.length));
    const hole = holes[index];
    if (hole === lastHole) {
        console.log('That is the same hole as before');
        return randomHole();
    }
    lastHole = hole;
    return hole;
}

// ----- Generates a random time for the mole to hide after show up -----
function randomTime(minimumTime, maximumTime) {
    return Math.round((Math.random() * (maximumTime - minimumTime)) + minimumTime);
}

// ----- Controls the score of the game each time a mole is clicked -----
function whackAMole () {
    score++
    this.parentNode.classList.remove('up');
    scoreBoard.innerHTML = score;
}

// ----- Event listener for the moles -----
moles.forEach(mole => mole.addEventListener('click', whackAMole));
