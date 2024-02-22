// Get your shorts on - this is an array workout!

// ## Array Cardio Day 1

// Some data we can work with

const inventors = [
    { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
    { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
    { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
    { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
    { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
    { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
    { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
    { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
    { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
    { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
    { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
    { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 }
];

const people = [
    'Bernhard, Sandra', 'Bethea, Erin', 'Becker, Carl', 'Bentsen, Lloyd', 'Beckett, Samuel', 'Blake, William', 'Berger, Ric', 'Beddoes, Mick', 'Beethoven, Ludwig',
    'Belloc, Hilaire', 'Begin, Menachem', 'Bellow, Saul', 'Benchley, Robert', 'Blair, Robert', 'Benenson, Peter', 'Benjamin, Walter', 'Berlin, Irving',
    'Benn, Tony', 'Benson, Leana', 'Bent, Silas', 'Berle, Milton', 'Berry, Halle', 'Biko, Steve', 'Beck, Glenn', 'Bergman, Ingmar', 'Black, Elk', 'Berio, Luciano',
    'Berne, Eric', 'Berra, Yogi', 'Berry, Wendell', 'Bevan, Aneurin', 'Ben-Gurion, David', 'Bevel, Ken', 'Biden, Joseph', 'Bennington, Chester', 'Bierce, Ambrose',
    'Billings, Josh', 'Birrell, Augustine', 'Blair, Tony', 'Beecher, Henry', 'Biondo, Frank'
];
		
// Array.prototype.filter()
// 1. Filter the list of inventors for those who were born in the 1500's

const inventorsBornIn50s = inventors.filter(inventor => inventor.year >= 1500 && inventor.year < 1600);
console.table(inventorsBornIn50s);

// Array.prototype.map()
// 2. Give us an array of the inventors first and last names
const inventorsNames = inventors.map(inventor => `${inventor.first} ${inventor.last}`);
console.log(inventorsNames);

// Array.prototype.sort()
// 3. Sort the inventors by birthdate, oldest to youngest
const sortByBirthdate = inventors.sort(function (inventorA, inventorB) {
    if (inventorA.year > inventorB.year) {
        return 1;
    } else if (inventorA.year < inventorB.year) {
        return -1;
    } else {
        return 0;
    }
    // Obs: To sort from youngest to oldest invert the order of A and B or the return values
    // return inventorA.year - inventorB.year // Another option (only for numbers)
})
console.table(sortByBirthdate);

// Array.prototype.reduce()
// 4. How many years did all the inventors live all together?
let initialValue = 0;
const totalYearsLived = inventors.reduce( (accumulator, currentValue) => {
    return accumulator + (currentValue.passed - currentValue.year)
}, initialValue);

console.log(totalYearsLived);

// 5. Sort the inventors by years lived
const sortByYearsLived = inventors.sort( (inventorA, inventorB) => {
    return (inventorA.passed - inventorA.year) - (inventorB.passed - inventorB.year);
})
console.table(sortByYearsLived);

// 6. create a list of Boulevards in Paris that contain 'de' anywhere in the name
// https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris

// Obs.: This exercise needs to be done in the browser
// const category = document.querySelector('.mw-category'); // Accessing the list of boulevards
// const parisBlvd = category.querySelectorAll('a'); // Accesing the list and storing the links (boulevardse)

// const arrayParisBlvd = Array.from(parisBlvd); // Transforming in array to manipulate it with map and filter
// const mapParisBlvd = arrayParisBlvd.map(blvd => blvd.innerHTML); // Getting the inner HTML from the links ('a') and putting in a new array
// const filterParisBlvd = mapParisBlvd.filter(blvd => blvd.includes(' de ')); // Filtering blvds


// 7. sort Exercise
// Sort the people alphabetically by last name
const sortAlphabetically = people.sort( function (personA, personB) {
    let lastNameA = personA.split(', ')[1];
    let lastNameB = personB.split(', ')[1];

    if (lastNameA > lastNameB) {
        return 1;
    } else if (lastNameA < lastNameB) {
        return -1;
    } else {
        return 0;
    }

    // return lastNameA.localeCompare(lastNameB); // Another option (for strings)
})

console.table(sortAlphabetically);

// 8. Reduce Exercise
// Sum up the instances of each of these
const data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck' ];

/* 
    1. Creates a new empty object;
    2. The accumulator will be this object and the currentItem will be each item of the array 'data';
    3. The currentItem already exists inside the object? If not, add it to the object as a key and its value will be 1
        If yes, add 1 to its value.
    4. Return the new object.
*/
const instancesSum = data.reduce( (countObj, currentItem) => {
    countObj[currentItem] ? ++countObj[currentItem] : countObj[currentItem] = 1;
    return countObj
}, {})

console.log(instancesSum);
