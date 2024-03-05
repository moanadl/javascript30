const inputTyping = document.querySelector('input');
const ulSuggestions = document.querySelector('.suggestions');

const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';

let arrayOfCities = [];
fetch(endpoint)
    .then(data => data.json())
    .then(dataJSON => arrayOfCities.push(...dataJSON))
    .catch(error => alert(error.message));

function getAPI(typingValue) {

    ulSuggestions.innerHTML = '';
    let numberOfSuggestions = 0;
    let typingValueCaseInsensitive = new RegExp(typingValue, 'gi');

    arrayOfCities.forEach (location => {

        if (location.city.match(typingValueCaseInsensitive) || location.state.match(typingValueCaseInsensitive)) {
            let cityHighlightedString = location.city.replace(typingValueCaseInsensitive, `<span class="hl">${typingValue}</span>`);
            let stateHighlightedString = location.state.replace(typingValueCaseInsensitive, `<span class="hl">${typingValue}</span>`);
            ulSuggestions.innerHTML += `
                <li>
                    <span class='location'>
                        <span>${cityHighlightedString},</span>
                        <span>${stateHighlightedString}</span>
                    </span>
                    <span>${Number(location.population).toLocaleString('en-US')}</span>
                </li>`
            numberOfSuggestions++
        }

    });

    numberOfSuggestions == 0 ? returnsToInitialState() : '';

}

function returnsToInitialState () {
    ulSuggestions.innerHTML = `
        <li>Filter for a city</li>
        <li>or a state</li>`
}

inputTyping.addEventListener('input', (e) => {
    let typingValue = e.target.value;
    getAPI(typingValue)
})




