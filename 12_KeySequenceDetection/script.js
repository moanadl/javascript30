// ----- Creating array of pressed letters and secret word -----
let arrayOfLetters = [];
let secretWord = 'secret';

// ----- key up event to capture the pressed key -----
window.addEventListener('keyup', (e) => {
    let letter = e.key;
    arrayOfLetters.push(letter);
    arrayOfLetters.length > secretWord.length ? arrayOfLetters.shift() : ''
    let formedWord = arrayOfLetters.join('');
    formedWord.includes(secretWord) ? cornify_add() : ''
})
