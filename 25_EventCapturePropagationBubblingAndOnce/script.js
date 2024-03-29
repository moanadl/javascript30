// ----- Importing the divs and the button from the DOM -----
const divs = document.querySelectorAll('div');
const button = document.querySelector('button');

// ----- Testing the 'stopPropagation' inside the function and the 'capture' option in the eventListener -----
function logTextDivs (e) {
    e.stopPropagation();
    const className = this.classList.value;
    console.log(className);
}

divs.forEach(div => div.addEventListener('click', logTextDivs, {
    capture: true // It triggers the event as it goes down (as it captures the event) instead of as it goes up. (It is false by default)
}));


// ----- Button can only be clicked once because of the option 'once' in the eventListener -----
function buttonOnce () {
    console.log('Clicked button once!');
}

button.addEventListener('click', buttonOnce, {
    once: true
})
