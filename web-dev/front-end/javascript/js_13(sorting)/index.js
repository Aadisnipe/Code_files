// let a=["zz","sdda","qq","coco"];
// a.sort();
// console.log(a);

//Js sorts elements in string order((like in a english dictionary so 10 is placed before 2))
// thats we use compare function to sort the array in number order
//in asscending order

// let number=[10,1,5,2,7,9,5,3,8,6,4]
// number.sort((a,b)=>a-b) // if positive b comes before a and if zero then nothing happens
// console.log(number);

// in descending order

// let number=[10,1,5,2,7,9,5,3,8,6,4]
// number.sort((a,b)=>b-a) 
// console.log(number);

// sortiing in a array of objects


let fruits =[{name:"Apple",color:"Red",calorie:55},
         {name:"Banana",color:"Yellow",calorie:76},
         {name:"orange",color:"orange",calorie:26},
         {name:"coconut",color:"brown",calorie:85},
         {name:"pineapple",color:"yellow",calorie:74}]
// // we will use localcompare
// //for asscending
// fruits.sort((a,b)=> a.name.toLowerCase().localeCompare(b.name.toLowerCase()))
// console.log(fruits);
// //for desscending
// fruits.sort((a,b)=> b.name.toLowerCase().localeCompare(a.name.toLowerCase()))
// console.log(fruits);

// fruits.sort((a,b)=>a.calorie-b.calorie);
// fruits.forEach(fruits=>console.log(fruits.calorie)); 

let tcalorie=fruits.map(x=>x.calorie);
console.log(tcalorie);


