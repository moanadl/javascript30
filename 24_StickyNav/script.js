// ----- Importing elements from the DOM -----
const body = document.querySelector('body');
const header = document.querySelector('header');
const navBar = document.querySelector('#main');

// ----- Scroll event to add a class to the body and add/remove a padding to it -----
// ----- This class will apply a style of 'position: fixed' to the navBar -----
document.addEventListener('scroll', () => {
       
    if(window.scrollY >= header.offsetHeight) {
        body.style.paddingTop = `${navBar.offsetHeight}px`;
        body.classList.add('fixed-nav');
    } else {
        body.classList.remove('fixed-nav');
        body.style.paddingTop = '0';
    }
   
})
