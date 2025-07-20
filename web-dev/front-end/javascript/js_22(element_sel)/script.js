function printf(line){
    return console.log(line);
}
const hd = document.getElementById("hd");    // getting by id
hd.textContent="My Food!";
const fruits=document.getElementsByClassName("fruits")  // getting by class name they act like array but not array
// fruits[0].textContent="Apple";
// fruits[1].textContent="Orange";
// fruits[2].textContent="Banana";
// for(let fruit of fruits){
//     fruit.style.backgroundColor="yellow";
// }

// type casting into array

Array.from(fruits).forEach(fruit => {
    fruit.textContent="fruit";
    fruit.style.color="blue"
})

const Heading = document.getElementsByTagName("h4"); // gettiing by tag name
Heading[0].style.backgroundColor="yellow"

Array.from(Heading).forEach(head => {
    head.style.color="red"
})

const queery =document.querySelector(".fruits");  // select the first mactching element
queery.style.backgroundColor="red";  // they give null if nothing matches


const queerys = document.querySelectorAll(".fruits") //returns a nodelist of element

// they are kind of list so no need to type cast them as array

queerys.forEach(q =>{
    q.style.backgroundColor="pink";
})

