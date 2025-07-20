const button =document.getElementById("button");
const img =document.getElementById("img");
let ishidden=false;
button.addEventListener("click", event =>{
    if (!(ishidden)) {
        img.style.visibility="hidden";   // you can also choose display
        button.textContent="Show";
        ishidden=true
    }
    else{
        img.style.visibility="Visible";
        button.textContent="Hide";
        ishidden=false;
    }
})