// ----- debounce function: the event will be triggered only at defined intervals -----
function debounce(func, wait = 20, immediate = true) {
    var timeout;
    return function() {
        var context = this, args = arguments;
        var later = function() {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        var callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
}

// ----- Importing the images -----
const images = document.querySelectorAll('img');

// ----- Slides each image when scrolling hits a certain point -----
function slidesImages () {
    images.forEach(image => {
        let imageHeight = image.height;
        let imageTop = image.offsetTop;
        let imageBottom = imageTop + imageHeight;
        let initialSlidePoint = (window.scrollY + window.innerHeight) - (imageHeight / 2);
        // innerHeight - KeyPoint
        initialSlidePoint > imageTop && window.scrollY < imageBottom ? image.classList.add('active') : image.classList.remove('active');
        // scrollY - KeyPoint
    })
}

// ----- Scroll event to call the debounce with the function slideImages -----
window.addEventListener('scroll', debounce(slidesImages)) // KeyPoint
