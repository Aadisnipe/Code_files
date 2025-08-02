// js objects is like mixer of structure from C and dictonary from python

// const person ={
//     name:"jhonny",
//     size:"6 inch",
//     colour:"black",
//     work:() => console.log("i bang people"),
//     add:function(a,b){
//         console.log(a+b);
//         console.log("addition complete")
//     }
// };
// console.log(person.name);
// console.log(person.size);
// console.log(person.colour);
// person.work();
// person.add(5,5);

// this keyword => yoo will know what is this 
// this does not work in arrow function

// this is used so that we don;t have to write object name again and again

const person ={
    name:"jhonny",
    size:6,
    colour:"black",
    work:function(){console.log(`${this.name} bang people`)} //this.name is same as person.name
};
console.log(person.size+8)