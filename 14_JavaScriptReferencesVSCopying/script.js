// Let's say we have an array
const players = ['Wes', 'Sarah', 'Ryan', 'Poppy'];

// ----- Copy the array... -----

// Using slice():
const playersSlice = players.slice();
console.log('Copied array (playersSlice)', playersSlice);
playersSlice.push('newItem');
console.log('original array:', players);
console.log('Modified playersSlice', playersSlice);

// Using concat():
let playerConcat = [];
playerConcat = players.concat();
console.log('Copied array (playerConcat)', playerConcat);
playerConcat.push('newItem');
console.log('original array:', players);
console.log('Modified playerSpread', playerConcat);

// Using ES6 spread operator:
const playerSpread = [...players];
console.log('Copied array (playerSpread)', playerSpread);
playerSpread.push('newItem');
console.log('original array:', players);
console.log('Modified playerSpread', playerSpread);

// With Objects
const person = {
    name: 'Wes Bos',
    age: 80
};

// ----- Copy the object... -----

// Using assign() - Shallow clone:
const personAssign = Object.assign({}, person);
console.log('Copied object personAssign:', personAssign);
personAssign.newItem = 'New item';
console.log('Original object:', person);
console.log('Modified object:', personAssign);

// Using ES6 spread operator:
const personSpread = {...person};
console.log('Copied object personSpread:', personSpread);
personSpread.newItem = 'New item';
console.log('Original object:', person);
console.log('Modified object:', personSpread);

// Using JSON.parse() and JSON.stringify() - Poor's man deep clone:
const personJSON = JSON.parse(JSON.stringify(person));
console.log('Copied object personSpread:', personJSON);
personJSON.newItem = 'New item';
console.log('Original object:', person);
console.log('Modified object:', personJSON);
