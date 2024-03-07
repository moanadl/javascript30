const dogs = [{ name: 'Snickers', age: 2 }, { name: 'hugo', age: 8 }];

function makeGreen() {
    const p = document.querySelector('p');
    p.style.color = '#BADA55';
    p.style.fontSize = '50px';
}

// Regular
console.log('Hello, world!');

// Interpolated
console.log('This is an %s string', 'interpolated');

// Styled
console.log('%cThis is a styled string', 'color: blue; background-color: white;');

// warning!
console.warn('WARNING!');

// Error :|
console.error('An error has occurred!');

// Info
console.info('Here is a piece of information');

// Testing
const p = document.querySelector('p');
console.assert(p.innerHTML === 'testing', false);

// clearing
// console.clear();

// Viewing DOM Elements
console.log(p);
console.dir(p);

// Grouping together

dogs.forEach(element => {
    console.groupCollapsed(`${element.name}`)
        console.log(`This is ${element.name}`);
        console.log(`${element.name} is ${element.age} years old`);
        console.log(`${element.name} is ${element.age * 7} dog years old`);
    console.groupEnd();
})

// counting
console.count('Word 1');
console.count('Word 1');
console.count('Word 2');
console.count('Word 1');
console.count('Word 3');
console.count('Word 3');

// timing
console.time('Testing .time() - Part I');

for (let i = 0; i<=1000; i++) {
    let testing = i + 2;
}

console.timeEnd('Testing .time() - Part I');

console.time('Testing .time() - Part II');

for (let i = 0; i<=1000000; i++) {
    let testing = i + 2;
}

console.timeEnd('Testing .time() - Part II');
