const daysEl = document.getElementById("dayscolor")
const hoursEl = document.getElementById("hourscolor")
const minsEl = document.getElementById("minscolor")
const secontsEl = document.getElementById("secontscolor")

const newYear = "31 dec 2022"; 

function countdown() {

    const newYearDate = new Date(newYear);
    const currentDate = new Date();

    const totalseconds = (newYearDate - currentDate) / 1000;

    const days = Math.floor(totalseconds / 3600 / 24);
    const hours = Math.floor(totalseconds / 3600) % 24;
    const mins = Math.floor(totalseconds / 60) % 60;
    const seconts = Math.floor(totalseconds) % 60;

    daysEl.innerHTML = days;
    hoursEl.innerHTML = formatTime(hours);
    minsEl.innerHTML = formatTime(mins);
    secontsEl.innerHTML = formatTime(seconts)

}

function formatTime(time){

    return time < 10 ? `0${time}` : time;

}

countdown() ;

setInterval (countdown, 1000);
