const button = document.getElementById("mybutton");
//with classlist we can add class to an element

//add
button.classList.add("enabled");   

//remove
button.classList.remove("enabled");   

//toggle (remove if present or add if not)
button.classList.toggle("enabled");   //add

button.classList.toggle("enabled");  //remove

//replace(oldclass , newclass)
button.classList.toggle("enabled");
button.classList.replace("enabled","new")

//contains this tells if a element contains a given class // passes true or flase based on the situation
console.log(button.classList.contains("enabled")); // false

console.log(button.classList.contains("new"));  //true