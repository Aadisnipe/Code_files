const timer =document.getElementById("timer");
let timmer_id=null; // it will keep the id of settimeinterval id
let startime=0;
let elapsedtime=0;
let isrunning=false;

function start() {
   if (!(isrunning)) {
    startime=Date.now()-elapsedtime;
    timmer_id=setInterval(update,10);
    isrunning=true;
   }
}

function stop() {
    if (isrunning) {
        clearInterval(timmer_id);
        elapsedtime=Date.now()-startime;
        isrunning=false;
    }
}

function reset() {
    clearInterval(timmer_id);
    startime=0;
    elapsedtime=0;
    isrunning=false;
    timer.textContent="00:00:00:00";
}

function update() {
    const current_time=Date.now();
    elapsedtime=current_time-startime;

    let hour = Math.floor(elapsedtime /(1000*60*60));
    let min = Math.floor(elapsedtime /(1000*60)%60);
    let sec = Math.floor(elapsedtime /1000%60);
    let ms = Math.floor(elapsedtime %(1000)/10);

    hour=String(hour).padStart(2,0);
    min=String(min).padStart(2,0);
    sec=String(sec).padStart(2,0);
    ms=String(ms).padStart(2,0);
    
    timer.textContent =`${hour}:${min}:${sec}:${ms}`
}