const canvasArea = document.getElementById('draw');

// ----- Configuring the canvas element -----
canvasArea.width = window.innerWidth;
canvasArea.height = window.innerHeight;
const ctx = canvasArea.getContext('2d'); // Defines the context for the canvas (2D, 3D, mapping...)
ctx.lineCap = 'round'; // Determines the shape used to draw the end points of lines

// ----- Events that will control when the drawing starts and ends and gets initial position of brush -----
let isDrawing = false;
let xClickPosition = 0;
let yClickPosition = 0;

canvasArea.addEventListener('mousedown', (e) => {
    xClickPosition = e.pageX - canvasArea.offsetLeft;
    yClickPosition = e.pageY - canvasArea.offsetTop;
    isDrawing = true;
})
canvasArea.onmousemove = draw;
canvasArea.addEventListener('mouseup', () => isDrawing = false);

// ----- Sets the initial width and color of the brush -----
let brushWidth = 10;
let increaseWidth = true; 
let color = 0;

// ----- Starts the drawing when user moves mouse -----
function draw (e) {

    let xMove = e.pageX - canvasArea.offsetLeft;
    let yMove = e.pageY - canvasArea.offsetTop;

    ctx.lineWidth = brushWidth;
    ctx.strokeStyle = `hsl(${color}, 100%, 50%)`;

    // ----- Starts the drawing -----
    if (isDrawing === true) {
        ctx.beginPath(); // Starts a new path of drawing
        ctx.moveTo(xClickPosition , yClickPosition); // Initial point of new path
        ctx.lineTo(xMove, yMove); // Second point of the line
        ctx.stroke(); // Draws the line
        
        // ----- Controls the width of the brush -----
        increaseWidth === true ? brushWidth++ : brushWidth--
        brushWidth === 100 ? increaseWidth = false : '';
        brushWidth === 1 ? increaseWidth = true : '';
        
        // ----- Controls the color of the brush -----
        color === 360 ? color = 0 : '';
        color++
    }

    xClickPosition = xMove;
    yClickPosition = yMove;

}
