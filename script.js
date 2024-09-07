const hour = document.getElementById("hour-hand");
const minute = document.getElementById("minute-hand");
const second = document.getElementById("second-hand")

function getTime() {

    let date = new Date();

    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();

    //get exact date by degrees
    let hourRotate = 30 * hours + minutes/ 2; 
    let minuteRotate = 6 * minutes;
    let secondRotate = 6 * seconds;


    hour.style.transform = `rotate(${hourRotate}deg)`;
    minute.style.transform = `rotate(${minuteRotate}deg)`;
    second.style.transform = `rotate(${secondRotate}deg)`;

}

getTime();
setInterval(getTime, 1000);