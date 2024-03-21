// ----- Importing the items to be scrolled from the DOM -----
const items = document.querySelector('.items');

// ----- Initializing variables -----
let isMouseDown = false;
let xClick;
let currentScroll;

// ----- Gets the position of the click and the current offsetLeft value -----
// ----- Also adds the class 'active' related to css styles -----
function mouseClick (e) {
    items.classList.add('active')
    isMouseDown = true;
    xClick = e.pageX - items.offsetLeft;
    currentScroll = items.scrollLeft;
}

// ----- Scrolls the items when mouse is clicked and moving considering the click position and the current offsetLeft of the items -----
const dragScroll =  (e) => {
    
    if(!isMouseDown) return
    e.preventDefault(); // Stops the browser from select things

    let cursorPosition = e.pageX - items.offsetLeft;
    let movement = xClick - cursorPosition;

    isMouseDown ? items.scrollLeft = currentScroll + movement : '';

}

// ----- Event listeners -----
items.addEventListener('mousedown', mouseClick);
items.addEventListener('mouseup', () => {
    items.classList.remove('active');
    isMouseDown = false;
});
items.addEventListener('mouseleave', () => {
    items.classList.remove('active');
    isMouseDown = false;
})
items.addEventListener('mousemove', dragScroll);
