// ----- Importing the background, the nav and the list items from the DOM -----
const dropdownBackground = document.querySelector('.dropdownBackground');
const navBar = document.querySelector('.top');
const navItems = document.querySelectorAll('.cool > li');

// ----- Getting the size and position of the nav -----
const navBarRect = navBar.getBoundingClientRect();

// ----- Event listener for when the mouse enters the elements -----
navItems.forEach(navItem => navItem.addEventListener('mouseenter', () => {
    // ----- Adding the style classes to the nav and to background -----
    navItem.classList.add('trigger-enter')
    setTimeout(() => navItem.classList.contains('trigger-enter') && navItem.classList.add('trigger-enter-active'), 100)
    dropdownBackground.classList.add('open');
    
    // ----- Importing the dropdown menu from the selected nav item -----
    const dropdownMenu = navItem.querySelector('ul') || navItem.querySelector('div');
    
    // ----- Getting the size and position of the dropdown menu and adding to its style -----
    const dropdownMenuRect = dropdownMenu.getBoundingClientRect();
    dropdownBackground.style.width = `${dropdownMenuRect.width}px`;
    dropdownBackground.style.height = `${dropdownMenuRect.height}px`;
    dropdownBackground.style.top = `${dropdownMenuRect.top - navBarRect.top}px`;
    dropdownBackground.style.left = `${dropdownMenuRect.left - navBarRect.left}px`;
}))

// ----- Event listener for when the mouse leaves the elements -----
navItems.forEach(navItem => navItem.addEventListener('mouseleave', () => {
    // ----- Removing the style classes to the nav and to background -----
    navItem.classList.remove('trigger-enter', 'trigger-enter-active');
    dropdownBackground.classList.remove('open');
}))
