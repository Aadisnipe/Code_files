const slides =document.querySelectorAll(".slides img");
let slideindex=0;
let intervalid=null;

addEventListener("DOMContentLoaded", intiallizer);
function intiallizer(){
    if (slides.length > 0){
        slides[slideindex].classList.add("displayslide");
        startLoop()
    }
}
function showslide(index){
    if (index >= slides.length) {
        slideindex=0;
    }
    else if (index < 0) {
        slideindex =slides.length -1;
    }
    slides.forEach(slide =>{
        slide.classList.remove("displayslide");
    })
    slides[slideindex].classList.add("displayslide");
}

function prevslide(){
    slideindex--;
    showslide(slideindex)
    stopLoop()
}

function nextslide(){
    slideindex++;
    showslide(slideindex);
    startLoop()
}
function startLoop() {
    // Prevent multiple intervals
    if (intervalid === null) {
        intervalid = setInterval(() => {
            slideindex++;
            showslide(slideindex);
        }, 1000);
    }
}

function stopLoop() {
    clearInterval(intervalid);
    intervalid = null;
}