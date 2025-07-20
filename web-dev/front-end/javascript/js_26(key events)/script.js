//keyevents = keyup and keydopwn
// document.addEventListener("keydown" ,event =>{
//     console.log(event);
// })

const box = document.getElementById("box");

document.addEventListener("mousemove", (e) => {
  // Move the box so its center follows the cursor
  const offsetX = box.offsetWidth / 2;
  const offsetY = box.offsetHeight / 2;

  box.style.left = `${e.clientX - offsetX}px`;
  box.style.top = `${e.clientY - offsetY}px`;
});
