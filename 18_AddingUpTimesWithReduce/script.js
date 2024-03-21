// ----- Importing the 'li' elements from the DOM -----
const timesArrays = Array.from(document.querySelectorAll('[data-time]'));

// ----- 1st map: get the value of the attribute -----
// ----- 2nd map: split the time into hours (if exists), minutes and seconds and sum each one separately -----
// ----- reduce: sum it all in seconds -----
const totalSeconds = timesArrays.map(time => time.getAttribute('data-time'))
.map(timeSplit => {

    let timeLength = timeSplit.split(':').length;

    if (timeLength > 2) {
        const [hour, minute, second] = timeSplit.split(':'); 
        return Number(hour * 3600) + Number(minute * 60) + Number(second);
    } else {
        const [minute, second] = timeSplit.split(':');
        return Number((minute * 60)) + Number(second);
    }
})
.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

// ----- Transforming seconds in hours, minutes and the seconds left -----
let hours = Math.floor(totalSeconds / 3600);
let minutesLeft = totalSeconds % 3600;
let minutes = Math.floor((minutesLeft / 60));
let seconds = minutesLeft % 60;

console.log(hours, minutes, seconds)
