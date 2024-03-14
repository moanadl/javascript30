const addItems = document.querySelector('.add-items');
const platesInput = document.querySelector('input[name="item"]');
const platesSubmit = document.querySelector('button[type="submit"]');
const itemsList = document.querySelector('.plates');
const manageButtons = document.querySelector('.manage-buttons');
let items = [];

// ----- When page loads will retrieve data from localStorage and store it on items array and call 'addsPlatesToDOM' -----
window.addEventListener('load', () => {
    itemsList.innerHTML = '';
    if (localStorage.length > 0) {
        items = JSON.parse(localStorage.getItem('plates'));
        items.map(element => { addsPlatesToDOM(element.id, element.name, element.status) });
    }
})

// ----- When form is submitted will call the functions to add plate to array, to DOM and to localStorage -----
addItems.addEventListener('submit', e => {
    e.preventDefault();
    let typedPlate = platesInput.value;
    let plateID = `Item${items.length}`;
    platesInput.value = '';
    addsPlatesToArray(plateID, typedPlate);
    addsPlatesToDOM(plateID, typedPlate);
    addsPlatesToLocalStorage()
})

// ----- Adding each input to items array -----
function addsPlatesToArray (plateID, plate) {
    items.push( { id: plateID, name: plate, status: 'unchecked' } );
}

// ----- Adding each plate to DOM as list item and with a checkbox input -----
function addsPlatesToDOM (plateID, plate, status) {
    itemsList.innerHTML += `
        <li>
            <input type='checkbox' id='${plateID}' ${status === 'checked' ? 'checked' : ''}>
            <label for='${plateID}'>${plate}</label>
        </li>
    `
}

// ----- Adding the items array to localStorage every time a plate is added -----
function addsPlatesToLocalStorage () {
    localStorage.setItem('plates', JSON.stringify(items));
}

// ----- Event to check/uncheck checkboxes and refresh the status of the targeted object -----
itemsList.addEventListener('change', (e) => {
    if (e.target.tagName === 'INPUT') {
        let currentItemID = e.target.id;
        let currentItem = items.find(({id}) => id === currentItemID);
        e.target.checked ? currentItem.status = 'checked' : currentItem.status = 'unchecked';
        addsPlatesToLocalStorage()
    }
})

// ----- Events to clear, check or uncheck all plates -----
manageButtons.addEventListener('click', e => {
    let buttonClicked = e.target.innerHTML;
    itemsList.innerHTML = '';

    if (buttonClicked === 'Clear all') {
        localStorage.clear();
    } else if (buttonClicked === 'Check all' || buttonClicked === 'Uncheck all') {
        items.forEach(item => {
            buttonClicked === 'Check all' ? item.status = 'checked' : item.status = 'unchecked';
            addsPlatesToDOM(item.id, item.name, item.status);
            addsPlatesToLocalStorage();
        })
    }
})
