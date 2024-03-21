// ----- Importing the anchor elements from DOM -----
const anchors = document.querySelectorAll('a');

// ----- Creating the element span that will shape it self to the anchors -----
const highlight = document.createElement('span');
highlight.classList.add('highlight');
document.body.appendChild(highlight);

// ----- Event of 'mouse over' to change de size and position of the span created above -----
anchors.forEach(anchor => anchor.addEventListener('mouseover', (e) => {
    const elementSize = e.target.getBoundingClientRect();

    highlight.style.width = `${elementSize.width}px`;
    highlight.style.height = `${elementSize.height}px`;
    highlight.style.top = `${elementSize.top}px`;
    highlight.style.left = `${elementSize.left}px`;
}))
