const panels = document.querySelectorAll('.panel');

panels.forEach(panel => panel.addEventListener('click', () => {
    panel.classList.toggle('open');
}))

panels.forEach(panel => panel.addEventListener('transitionend', (e) => {
    e.propertyName === 'flex-grow' ? panel.classList.toggle('open-text') : '';
}))

