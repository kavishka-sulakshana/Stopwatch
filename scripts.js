let mSeconds = document.getElementById('msec');
let seconds = document.getElementById('sec');
let minutes = document.getElementById('min');
let hours = document.getElementById('hr');
let start = document.getElementById('startBtn');

let counter = 0;
let msec = 0;
let sec = 0;
let min = 0;
let hrs = 0;
let timer;

const startWatch = () => {
    start.classList.add('hide');
    timer = setInterval(function(){
        msec++
        if(min>=60){
            hrs++;
            min = 0;
        }
        if(sec>=60){
            min++;
            sec = 0;
        }
        if(msec>=100){
            sec++;
            msec = 0;
        }
        mSeconds.textContent = (msec<10) ? '0'+msec : ''+msec;
        seconds.textContent = (sec<10) ? '0'+sec : ''+sec;
        minutes.textContent = (min<10) ? '0'+min : ''+min;
        hours.textContent = (hrs<10) ? '0'+hrs : ''+hrs;
        // console.log(sec)
    },10);
}

const stopWatch = () => {
    clearInterval(timer);
    start.classList.remove('hide');
}

const resetWatch = () => {
    hrs = 0
    min = 0
    sec = 0
    msec = 0
    clearInterval(timer);
    seconds.textContent = "00";
    minutes.textContent = "00";
    hours.textContent = "00";
    mSeconds.textContent = "00";
    start.classList.remove('hide');
}

document.getElementById('startBtn').addEventListener('click',startWatch);
document.getElementById('stopBtn').addEventListener('click',stopWatch);
document.getElementById('resetBtn').addEventListener('click',resetWatch);