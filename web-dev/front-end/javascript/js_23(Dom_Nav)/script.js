// Navigate throght DOM
//for this DOM

// body->grandparents
//Ul-> siblinngs to each other
//ul-> parents to li
//li->siblings to each other

//first element of same catogorey is first child and vice versa of this is last child 

//.firstelementchild

// const element=document.getElementById("vegtables");
// const first=element.firstElementChild;
// console.log(first);
// first.style.backgroundColor="yellow";

// const element=document.querySelectorAll("ul"); // give all ul list
// console.log(element)
// element.forEach(first =>{               //took each ul and store in first
//     const f=first.firstElementChild;    // then in f is the first element child
//     f.style.backgroundColor="yellow";
// })

//.lastelementchild

// const element=document.getElementById("vegtables");
// const first=element.lastElementChild;
// console.log(first);
// first.style.backgroundColor="yellow";

// const element=document.querySelectorAll("ul"); // give all ul list
// console.log(element)
// element.forEach(last =>{               //took each ul and store in first
//     const l=last.lastElementChild;    // then in f is the first element child
//     l.style.backgroundColor="yellow";
// })

//returns the next element or null

//.nextelementsibling

// const element=document.getElementById("fruits");
// const next=element.nextElementSibling;
// console.log(next);
// next.style.backgroundColor="yellow";

//returns the previous element or null

//.previouselementsibling

// const element=document.getElementById("snacks");
// const previous=element.previousElementSibling;
// console.log(previous);
// previous.style.backgroundColor="yellow";

//returns the parent element from child element id

//.parentelemenent

// const element=document.getElementById("apple");
// const parent=element.parentElement;
// parent.style.backgroundColor="yellow";

//returns html colletion from parent element id
// html collection can be be type casted as array
//.children

// const element=document.getElementById("fruits");
// const children=element.children;
// children[2].style.backgroundColor="yellow";

const element =document.getElementById("fruits");
const children = element.children;
Array.from(children).forEach(child =>{
    child.style.backgroundColor="yellow";
})