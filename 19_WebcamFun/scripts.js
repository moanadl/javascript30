// ----- Importing the video, audio, canvas and div for the pictures from the DOM -----
const canvas = document.querySelector('.photo');
const snap = document.querySelector('.snap');
const strip = document.querySelector('.strip');
const video = document.querySelector('.player');

// ----- Defining the context for the canvas -----
const ctx = canvas.getContext('2d');

function getVideo() {
    // Provides access to connected media input devices. In this case, it will get the video and not the audio
    navigator.mediaDevices.getUserMedia({video: true, audio: false})
    .then(mediaStreamID => {
        // ----- Setting the video source to the media stream identification -----
        video.srcObject = mediaStreamID;
        video.play();
    })
    .catch(error => {
        console.error('Ooops, something went wrong!', error)
    })
}

getVideo()

// ----- Gets the image from the webcam video and paint it to the canvas -----
function paintToCanvas() {
    const videoHeight = video.clientHeight;
    const videoWidth = video.clientWidth;
    // Obs.: The canvas need to have the same height and width from the video
    canvas.height = videoHeight;
    canvas.width = videoWidth;

    // ----- Each 100ms it will get the image from the video and paint it to the canvas
    return setInterval(() => {
        ctx.drawImage(video, 0, 0, videoWidth, videoHeight) // Draw an imagem to the canvas

        // ----- Applying filters to the video image -----
        let pixelsFromCanvas = ctx.getImageData(0, 0, videoWidth, videoHeight); // Gets the pixels from the canvas
        // Obs.: It returns a special type of array with the values of rgba. The first item is red, the second is green, the third is blue, the fourth is alpha and so on.

        // ----- Applying a red effect filter -----
        pixelsFromCanvas = redEffect(pixelsFromCanvas);

        // ----- Applying a rgb slipt filter -----
        // pixelsFromCanvas = rgbSplit(pixelsFromCanvas);
        // ctx.globalAlpha = 0.8;

        // ----- Applying a green screen filter -----
        // pixelsFromCanvas = greenScreen(pixelsFromCanvas);

        ctx.putImageData(pixelsFromCanvas, 0, 0); // Apply pixels to canvas
    }, 100)
}

// ----- Captures an instant picture from the video and saves it as an img -----
function takePhoto() {

    // ---- Playing the sound of the camera -----
    snap.currentTime = 0;
    snap.play();

    // ----- Capturing the image from the webcam and adding it to the page -----
    const imageURL = canvas.toDataURL('image/jpeg'); // Returs a data URL containing a representation of the image in the format specified by the type parameter (default: .png)
    const linkToImage = document.createElement('a');
    linkToImage.href = imageURL;
    linkToImage.setAttribute('download', 'beautiful'); // Downloads file with that name when clicking on the link
    linkToImage.innerHTML = `<img src='${imageURL}' alt='Beautiful woman' />`;
    strip.insertBefore(linkToImage, strip.firstChild);

}

function redEffect(pixelsFromCanvas) {

    // ----- Looping throught every pixel and adding value to the red and decreasing from the green and blue -----
    for (let i = 0; i < pixelsFromCanvas.data.length; i+=4) {
        pixelsFromCanvas.data[i + 0] = pixelsFromCanvas.data[i + 0] + 200; // Red
        pixelsFromCanvas.data[i + 1] = pixelsFromCanvas.data[i + 1] - 10; // Green
        pixelsFromCanvas.data[i + 2] = pixelsFromCanvas.data[i + 2] - 10; // Blue
    }

    return pixelsFromCanvas;
}

function rgbSplit(pixelsFromCanvas) {
    
    // ----- Looping throught every pixel and changing their positions -----
    for (let i = 0; i < pixelsFromCanvas.data.length; i+=4) {
        pixelsFromCanvas.data[i - 50] = pixelsFromCanvas.data[i + 0]; // Red
        pixelsFromCanvas.data[i + 100] = pixelsFromCanvas.data[i + 1]; // Green
        pixelsFromCanvas.data[i - 200] = pixelsFromCanvas.data[i + 2]; // Blue
    }

    return pixelsFromCanvas;
}

function greenScreen(pixelsFromCanvas) {
    // ----- Creating an object to store the levels of rgba -----
    const levels = {};

    // ----- Getting the values of rgba minimum and maximum from the input values and adding them to the object 'levels' -----
    document.querySelectorAll('.rgb input').forEach((input) => {
        levels[input.name] = input.value;
    })

    // ----- Looping throught the pixels and storing the rgba values into variables for each iteration -----
    for (let  i = 0; i < pixelsFromCanvas.data.length; i+=4) {
        let red = pixelsFromCanvas.data[i + 0];
        let green = pixelsFromCanvas.data[i + 1];
        let blue = pixelsFromCanvas.data[i + 2];

        // ----- If the rgb values are within the parameters defined in the input, alpha for this pixel is 0 -----
        if (red >= levels.rmin && red <= levels.rmax &&
            green >= levels.gmin && green <= levels.gmax &&
            blue >= levels.bmin && blue <= levels.bmax) {
                pixelsFromCanvas.data[i + 3] = 0; // Alpha to 0 (full transparency)
            }
    }

    return pixelsFromCanvas;
}

// ----- Event that will trigger when the webcam is "available" and the video can start -----
video.addEventListener('canplay', paintToCanvas);
