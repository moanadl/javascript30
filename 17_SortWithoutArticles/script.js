// ----- Importing the <ul> element -----
const bandsList = document.getElementById('bands');

const bands = [
    'The Plot in You', 'The Devil Wears Prada', 'Pierce the Veil', 'Norma Jean', 
    'The Bled', 'Say Anything', 'The Midway State', 'We Came as Romans', 'Counterparts', 
    'Oh, Sleeper', 'A Skylit Drive', 'Anywhere But Here', 'An Old Dog'
];

// ----- Sorts the list -----
function sortWithoutArticles (a, b) {

    const regex = /^(a |the |an )/i;

    // --- Removing the articles from the strings ---
    a.match(regex) ? a = a.replace(regex, ' ').trim() : '';
    b.match(regex) ? b = b.replace(regex, ' ').trim() : '';

    if (a > b) {
        return 1;
    } if (a < b) {
        return -1;
    }

}

let bandsSorted = bands.sort(sortWithoutArticles);

// ----- Adding the sorted list to the DOM -----
bandsSorted.map(band => {
    bandsList.innerHTML += `
        <li>${band}</li>
    `
})
