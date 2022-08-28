const days2El = document.getElementById("dayscolor2")
const hours2El = document.getElementById("hourscolor2")
const mins2El = document.getElementById("minscolor2")
const seconts2El = document.getElementById("secontscolor2")

const newYear2 = "11 feb 2023"; 

function countdown() {

    const newYearDate2 = new Date(newYear2);
    const currentDate2 = new Date();

    const totalseconds2 = (newYearDate2 - currentDate2) / 1000;

    const days2 = Math.floor(totalseconds2 / 3600 / 24);
    const hours2 = Math.floor(totalseconds2 / 3600) % 24;
    const mins2 = Math.floor(totalseconds2 / 60) % 60;
    const seconts2 = Math.floor(totalseconds2) % 60;

    days2El.innerHTML = days2;
    hours2El.innerHTML = formatTime(hours2);
    mins2El.innerHTML = formatTime(mins2);
    seconts2El.innerHTML = formatTime(seconts2)

}

function formatTime(time){

    return time < 10 ? `0${time}` : time;

}

countdown() ;

setInterval (countdown, 1000);