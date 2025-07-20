let buttons = document.querySelectorAll(".button"); // it give a nodelist which is statcic means does not update automatically

// how to add element in a nodelist

//step 1 create

const but =document.createElement("button");

//step 2 add properties

but.textContent="Button 5"
but.classList="button"

//step 3 add it to the location

document.body.appendChild(but)

//updating the nodelist

buttons = document.querySelectorAll(".button");
console.log(buttons)

buttons.forEach(button =>{
    button.addEventListener("click", event =>{
        event.target.style.backgroundColor="red";
    })
})
buttons.forEach(button =>{
    button.addEventListener("mouseover", event =>{
        event.target.style.backgroundColor="yellow";
    })
})
buttons.forEach(button =>{
    button.addEventListener("mouseout", event =>{
        event.target.style.backgroundColor="aquamarine";
    })
})

//deletiing element using nodelist

buttons.forEach(button =>{
    button.addEventListener("click", event => {
        event.target.remove();
        buttons = document.querySelectorAll(".button");
        console.log(buttons);
    })
})