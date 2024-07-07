// ----- Importing the elements for the range options, the text area and the buttons for speak and stop from the DOM -----
const voicesDropdown = document.querySelector('[name="voice"]');
const options = document.querySelectorAll('[type="range"], [name="text"]');
const speakButton = document.querySelector('#speak');
const stopButton = document.querySelector('#stop');

const msg = new SpeechSynthesisUtterance(); // Represents a speech request. It contains the content the speech service should read and information about how to read it
msg.text = document.querySelector('[name="text"]').value; // Gets and sets the text that will be synthesized when the utterance is spoken

// ----- Creating an array that will contain the types of voices to read the msg -----
let voices = [];

// ----- Adds the availabe voices from them API to the options -----
function populateVoices() {
    voices = speechSynthesis.getVoices();

    voicesDropdown.innerHTML += voices
    .filter(voice => voice.lang.includes('en-GB'))
    .map(voice => `<option value="${voice.name}">${voice.name} (${voice.lang})</option>`);
}

// ----- Gets the selected value of the dropdown, search for a correspondence in the API available voices and sets it as the voice to be used -----
function setVoice () {
    msg.voice = voices.find(voice => voice.name === this.value);
    speakStop();
}

// ----- Sets the voice to correspond the values from the selected options -----
function setOptions() {
    msg[this.name] = this.value;
    speakStop()
}

// ----- Restarts the speechSynthesis everytime a change is made or when the buttons 'speak'/'stop' are clicked -----
function speakStop (startOver = true) {
    speechSynthesis.cancel();
    startOver ? speechSynthesis.speak(msg) : '';
}

// ----- When the page loads, the voices are ready to be used and the populateVoices function is called -----
speechSynthesis.addEventListener('voiceschanged', populateVoices);
// ----- When a voice is selected the event calls the setVoice function -----
voicesDropdown.addEventListener('change', setVoice);
// ----- When the value of the rate and pitch options are changed calls the setOptions function -----
options.forEach(option => option.addEventListener('change', setOptions));
// ----- When the buttons 'speak'/'stop' are clicked, calls the speakStop function -----
speakButton.addEventListener('click', speakStop);
stopButton.addEventListener('click', () => speakStop(false)); // To pass a parameter inside an event, a arrow function can be used
