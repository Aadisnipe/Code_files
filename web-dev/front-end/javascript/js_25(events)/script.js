const box=document.getElementById("box");

// event listner javascripts has many built in events like click ,keydown etc
//event is a objest with different properties
let isBlue = true;
box.addEventListener("click",event=>{
  if (isBlue) {
    box.style.backgroundColor = "tomato";
  } else {
    box.style.backgroundColor = "lightblue";
  }
  isBlue = !isBlue;
  event.target.textContent="Stop ☠️";
})
// box.addEventListener("mouseover",event=>{
//     event.target.style.backgroundColor="yellow";
//     event.target.textContent="Wait 🫸";
// })
// box.addEventListener("mouseout",event=>{
//     event.target.style.backgroundColor="lightgreen";
//     event.target.textContent="Go 😎";
// })

