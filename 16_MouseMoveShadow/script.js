// ----- Importing text element from DOM -----
const text = document.querySelector('h1');

// ----- Defining the center of the text element -----
const textCenterX = text.offsetLeft + (text.offsetWidth / 2);
const textCenterY = text.offsetTop + (text.offsetHeight / 2);

// ----- Defining how much the shadow will move with the mouse -----
const xMoveRate = 0.4;
const yMoveRate = 0.7;

// ----- Event that will identify the mouse movement and move the shadows -----
window.addEventListener('mousemove', e => {

    const XPositiveMove = (e.pageX - textCenterX) * xMoveRate;
    const YPositiveMove = (e.pageY - textCenterY) * yMoveRate;
    const XNegativeMove = (textCenterX - e.pageX) * xMoveRate;
    const YNegativeMove = (textCenterY - e.pageY) * yMoveRate;

    text.style.textShadow = `
    ${YPositiveMove}px ${XNegativeMove}px 0 rgba(0,255,0,0.7),
    ${XNegativeMove}px ${YPositiveMove}px 0 rgba(0,255,255,0.7),
    ${XPositiveMove}px ${YPositiveMove}px 0 rgb(255,0,255,0.7),
    ${YNegativeMove}px ${XPositiveMove}px 0 rgba(0,0,255,0.7)
    `
})
