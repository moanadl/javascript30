// ----- Importing the elements (<div> and <audio> with the attribute [data-key]) -----
const dataKeys = document.querySelectorAll('[data-key]');

// ----- Creating separated arrays for <div> and <audios> -----
let divTags = [];
let audioTags = [];

dataKeys.forEach( key => {
    if (key.tagName === 'DIV') {
        divTags.push(key)
    } else if (key.tagName === 'AUDIO') {
        audioTags.push(key);
    }
})

// ----- Adding the 'click' event -----
divTags.forEach (tag => tag.addEventListener('click', function(e) {
    // Conditional for identify if the element being clicked is the father or the child...
        // ...If it's the child, get the data-key value from the parent
    if (e.target.parentNode.classList.contains('key')) {
        let dataKeyValue = e.target.parentNode.getAttribute('data-key')
        getAudio(dataKeyValue, e.type)
    } else {
        let dataKeyValue = e.target.getAttribute('data-key')
        getAudio(dataKeyValue, e.type)
    }
}));

// ----- Playing the correspondent audio -----
function getAudio (dataKeyValue, eventType) {
    audioTags.forEach( audio => {
        if(audio.getAttribute('data-key') === dataKeyValue){
            let index = audioTags.indexOf(audio);
            //  Sets the currentTime to 0 so you don't have to wait the audio to finish to play it again...
                // ...You can simply interrupt it and restart it
            audioTags[index].currentTime = 0;
            audioTags[index].play();
            // If the event isn't 'click' is 'keydown', so add the class 'playing' for the yellow border
            if (eventType !== 'click') {
                addClass(index);
            }
        }
    })
}

// ----- Adding the class 'playing' that has the yellow -----
function addClass (index) {
    divTags[index].classList.add('playing');
    // When the key is released the border comes back to its original style
    window.addEventListener('keyup', () => {
        divTags[index].classList.remove('playing');
    })
}

// ----- Adding the 'keydown' event ----- 
window.addEventListener('keydown', e => {
    // Identifying the pressed key and calling 'getAudio' with the correspondent [data-key] value
    switch(e.key) {
        case 'a': 
            getAudio('65');
            break
        case 's': 
            getAudio('83');
            break
        case 'd': 
            getAudio('68');
            break
        case 'f': 
            getAudio('70');
            break
        case 'g': 
            getAudio('71');
            break
        case 'h': 
            getAudio('72');
            break
        case 'j': 
            getAudio('74');
            break
        case 'k': 
            getAudio('75');
            break
        case 'l': 
            getAudio('76');
            break
    }
})
