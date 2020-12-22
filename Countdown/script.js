const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minEl = document.getElementById("minutes");
const secEl = document.getElementById("second");


//let dataEl = document.getElementById('data').value;

//let newYears = document.getElementById('data').value;

const newYears = "1 Jan 2021";

function countdown () {

    const newYearsDate = new Date(newYears);
    const realDate = new Date();
    
    //take all the seconds and divide for 1000 to reduce the number
    const totalSec = (newYearsDate - realDate) / 1000;
    //to get days, we just turn it to hours dividing for 3600 and then divide for the 1 day hour `24`
    const days = Math.floor(totalSec / 3600 / 24);
    //the rest of the days are the hours, so we use the %
    const hours = Math.floor(totalSec / 3600) % 24;
    const min = Math.floor(totalSec / 60) % 60;
    const sec = Math.floor(totalSec) % 60;
    
    
    daysEl.innerHTML = days;
    hoursEl.innerHTML = hours;
    minEl.innerHTML = min;
    secEl.innerHTML = format(sec);
    
}

function refresh () {
    
    let dataEl = document.getElementById('data').value;

    newYears = dataEl;

    console.log(newYears);

}

function format (time) {
    return time < 10 ? (`0${time}`) : time;
}

countdown();

setInterval(countdown, 1000);