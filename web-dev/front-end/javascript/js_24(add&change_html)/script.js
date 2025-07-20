// //Four steps tp add and change a html

// //1. create a element
// const newElement = document.createElement("h1");




// //2. add content to the element(colour , alignment etc)
// newElement.textContent = "Hello World";
// newElement.id="h1";
// newElement.style.textAlign="center";
// newElement.style.color = "red";
// newElement.style.fontFamily = "cursive";

// //3. append the element to the DOM
// document.getElementById("box1").append(newElement); // it will add in the end of box 1
// // document.body.append(newElement); // append will add the element to the desire place(for eg body / div etc) in the end as the last child
// // document.body.prepend(newElement); //add as the first child

// // adding in between the boxes (parent is body and boxes are child)

// // const box2=document.getElementById("box2");

// // document.body.insertBefore(newElement,box2);  //insertBefore(<newelement>,<currentelement>)

// //using node list
// // const boxes=document.querySelectorAll(".box"); //gives a node list
// // document.body.insertBefore(newElement,boxes[2]);

// //4. remove the element from the DOM    
// // document.body.removeChild(newElement); //remove from body

// document.getElementById("box1").removeChild(newElement); //remove from box