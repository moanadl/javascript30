// ----- Importing the input from the DOM -----
const inputCheckers = Array.from(document.querySelectorAll('input'));

// ----- Initializing the necessary variables -----
let checkedBoxes = [];
let isKeyPressed = false;

// ----- Adding an event of 'change' for each input -----
inputCheckers.forEach (input => input.addEventListener('change', e => {

    // ----- Identifies the clicked checkbox and its index in the inputCheckers array -----
    const currentCheckbox = e.target;
    const currentCheckboxIndex = inputCheckers.indexOf(currentCheckbox);
    
    // ----- If box is being unchecked, delete it from the array of checkedBoxes...
    // ...If not, add to it and call shiftCheckBoxes -----
    if (!e.target.checked) {
        const currentUncheckbox = checkedBoxes.find(element => element.index === currentCheckboxIndex);
        const currentUncheckboxIndex = checkedBoxes.indexOf(currentUncheckbox);
        checkedBoxes.splice(currentUncheckboxIndex, 1);
    } else {
        checkedBoxes = [...checkedBoxes, { index: currentCheckboxIndex }];
        shiftCheckBoxes(currentCheckboxIndex)
    }

}))

// ----- Checks if 'shift' is being pressed and select the boxes in between the current and the last box clicked ----
function shiftCheckBoxes (currentCheckboxIndex) {

    if (isKeyPressed) {
        const lastCheckBoxIndex = checkedBoxes[checkedBoxes.length - 2].index;
        for (let i = lastCheckBoxIndex; 
            lastCheckBoxIndex < currentCheckboxIndex ? i <= currentCheckboxIndex : i >= currentCheckboxIndex; 
            lastCheckBoxIndex < currentCheckboxIndex ? i++ : i--) {
            inputCheckers[i].checked = true;

            // ----- Checks if box is already in the array, if not, adds it. -----
            if (checkedBoxes.filter(element => element.index === i).length <= 0) {
                checkedBoxes = [...checkedBoxes, { index: i }];
            }
        }
    }

}

// ----- Changes the status of 'isKeyPressed' for true or false ----
window.addEventListener('keydown', (e) => {
    let keyPressed = e.key;
    keyPressed === 'Shift' ? isKeyPressed = true : ''
})

window.addEventListener('keyup', (e) => {
    isKeyPressed = false;
})
