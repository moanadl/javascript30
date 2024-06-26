// ----- Importing the 'div' that will contain the transcript from the DOM -----
const words = document.querySelector('.words')

// ----- Checking if the API is available in the browser. If not, use the API with prefixed properties -----
window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

// ----- Defining an instance of speech recognition -----
const recognition = new SpeechRecognition();

// ----- Setting some properties for the API -----
recognition.lang = 'en-US'; // Language
recognition.interimResults = true; // If the API should wait until the end of the speaking to generate results or not

// ----- Creating a <p> tag to append to the <div> -----
let p = document.createElement('p');
words.appendChild(p);

// ----- Event that will trigger when the user starts talking -----
recognition.addEventListener('result', (e) => {
    // ----- Getting the transcript -----
    let text = e.results[0][0].transcript;
    // ----- Checking if the user has done speaking -----
    let isFinal = e.results[0].isFinal;

    // ----- Replace some words of the transcript for the heart emoji -----
    let wordsReplace = text.replace(/heart|love/gi, '❤');
    p.innerHTML = wordsReplace;

    // ----- If the user says "mischief managed" the 'end' event listener is removed and the speech recognition is not started again at the end of the speaking -----
    if(text.toUpperCase() === 'MISCHIEF MANAGED') {
        recognition.removeEventListener('end', recognition.start);
    } else {
        // ----- If the user stops speaking, a new <p> tag is created for the next transcript -----
        if(isFinal) {
            p = document.createElement('p');
            words.appendChild(p);
        }
    }

})

// ----- Event that will trigger when the uses stops speaking and will re-start the speech recognition -----
recognition.addEventListener('end', recognition.start);

// ----- Starts the speech recognition -----
recognition.start();
