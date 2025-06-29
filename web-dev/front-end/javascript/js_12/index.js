// Destrcutring = extracts vlaue from array or object and assign them to variables

// 1.swaping values using array
// let a=5;
// let b=10;

// [a,b]=[b,a];
// console.log(a,b);

// 2.swap 2 elements in array & Assignning value to a variable
// let arr=[1,2,3,4,5];
// [arr[0],arr[4]]=[arr[4],arr[0]];
// console.log(arr); 

// let arr =[9,8,7,1,5,3];
// let[a,b,c,d,e,f]=arr;
// console.log(a,b,c,d,e,f);

//we can even skip some values
// let[a,b,,c]=arr;
// console.log(a,b,c);

//3.Exxtract values from object
// let obj={
//     name:"Aditya",
//     age:22,
//     city:"Bengaluru",
//     state:"Karnataka"
// }
// let{name,age="Kuch too hoga"}=obj;  ////we can set default values also
// console.log(name,age);

//4.we can pass object to function and extract values from it
// function func({name,age="Kuch too hoga",city})
// {
//     console.log(name,age,city);
// }
// let obj={
//     name:"Aditya",
//     age:22,
//     city:"Bengaluru",
//     state:"Karnataka"
// }
// func(obj); 

//                    nested object

// const person={
//     name:"Bob",
//     fav_food:["pizza","burger"],
//     address:{
//         city:"bikkni bottom",
//         country:"Int. water"
//     }
// }
// console.log(person) // prints entire object
// console.log(person.address) //prints only address object
// console.log(person.address.city) //prints only city
// console.log(person.fav_food[0]) //prints only pizza
// console.log(person.fav_food[1]) //prints only burger


//                    another example use of nested object

// class Person {
//     constructor(name,age,...address) {   //spread operator will spread the array elements into the constructor arguments
//         this.name=name;
//         this.age=age;
//         this.address=new Address(...address);
//     }
// }
// class Address {
//     constructor(city,state,country) {
//         this.city=city;
//         this.state=state;
//         this.country=country;
//     }
// }

// const person=new Person("Aditya",22,"bikkni","karnataka","india");
// console.log(person.address);  //gives object
// console.log(person.address.city); //gives city

//                     nested object with array

let fruits =[{name:"Apple",color:"Red",calorie:55},
         {name:"Banana",color:"Yellow",calorie:76},
         {name:"orange",color:"orange",calorie:26},
         {name:"coconut",color:"brown",calorie:85},
         {name:"pineapple",color:"yellow",calorie:74}]

// for(i in fruits){
//     console.log(fruits[i].name)
// }
// fruits.push({name:"watermelon",color:"green",calorie:26})
// console.log(fruits)
// fruits.pop()
// console.log(fruits)
// fruits.splice(2,1,{name:"Mango",color:"yellow",calorie:25})  //splice(insert_placeindex,how_many_to_Delete from that index,item to inserted)
// console.log(fruits)
// for(i in fruits){
//     console.log(fruits[i].name)
// }
// fruits.forEach((fruit, index) => {        // foreach method takes element and index(by deafult) as arguments
//     console.log(index + " " + fruit.name);
// });

// let cal= fruits.map(fruits => fruits.calorie)  //map method takes element as argument and returns a new array
// console.log(cal)

// const color=fruits.filter(fruits => fruits.color=="Red" || fruits.color=="Yellow");  //filter method takes element as argument and returns a new object
// console.log(color)

let max_cal=fruits.reduce((max,fruit)=> fruit.calorie>max.calorie?fruit:max)  //reduce method takes two arguments (initial value=0 by deafult, callback function)
console.log(max_cal)
