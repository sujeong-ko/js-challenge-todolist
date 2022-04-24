const calendar = document.querySelector("#today");
const clock = document.querySelector("#clock");

function getClock(){
    const date = new Date();
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");
    clock.innerText = `${hours}:${minutes}:${seconds}`;
}

function getDate(){
    const today = new Date();
    const year = String(today.getFullYear());
    const month = today.toLocaleDateString('en-US', {
        month: 'short',
      });
    const date = String(today.getDate());
    const day = today.toLocaleDateString('en-US', {
        weekday: 'long',
      });
    calendar.innerText = `${day}, ${month} ${date} ${year}`;
}

getClock();
getDate();
setInterval(getClock, 1000);
setInterval(getDate, 1000);

