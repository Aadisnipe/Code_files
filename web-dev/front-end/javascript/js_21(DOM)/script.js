// console.log("hello");
// console.log(typeof(document));  //entire html and css can be accesed through js because they are object
// console.dir(document); // from this direoctorywe can change anything
document.title="pop";
document.body.style.backgroundColor="#e23535";
document.body.style.overflow="hidden"
document.body.style.boxSizing="border-box"     // these line made everything look in a box
document.body.style.padding="0"
document.body.style.margin="0"
const hd =document.getElementById(`hd`);
hd.style.color="white";
hd.style.fontSize="100px";
hd.style.display="flex";
hd.style.justifyContent="center";
hd.style.alignItems="center";
hd.style.textAlign="center";
hd.textContent=" Hello World😎";
hd.style.margin="0";
hd.style.height="100vh";
hd.style.fontFamily="verdana"
//const hd = document.getElementById("hd");
// hd.textContent = "hello";
