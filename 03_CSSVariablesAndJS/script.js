// ----- Importing the <input> and the <img> -----
const parameters = document.querySelectorAll('input');
const image = document.querySelector('img');
const jsTitle = document.querySelector('.hl');

// ----- When the image loads, identifies the default values of its styles and apply them on it -----
image.onload = function () {

    parameters.forEach(parameter => {
        changesStyle(parameter);
    })
    
}

// ----- Applies an event of change on each <input> that calls the function to change the styles -----
parameters.forEach(parameter => parameter.addEventListener('change', () => changesStyle(parameter)))

// ----- Changes de values of the selected style -----
function changesStyle (parameter) {
    
    valueParameter = parameter.value;

    if (parameter.id === 'spacing') {
        image.style.padding = `${valueParameter}px`
    } else if (parameter.id === 'blur') {
        image.style.filter = `blur(${valueParameter}px)`
    } else if (parameter.id === 'base') {
        image.style.background = valueParameter;
        jsTitle.style.color = valueParameter;
    }

}

