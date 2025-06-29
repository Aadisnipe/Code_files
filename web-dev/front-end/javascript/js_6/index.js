let a=[1,2,3,4];
console.log(a);
// // arrayname.length give the length of the array
// console.log("Its the array length =>"+String(a.length));
// // for (let i = 0; i < a.length; i++) {
// //     console.log(a[i]);
    
// // }
// // for of loop
// // for (const i of a) {
// //     console.log(i);  // it is same as for i in a just in to of; give the element of the array
// // }
// // console.log("\n");
// // // for in loop
// // for (const i in a) {
// //     console.log(a);  // it is same as for i in len(a) ; give the index of the each element of the array
// // }

// a.push(5)  // same as a.append(5)
// a.pop()    // same as a.pop()
// a.unshift(100)  // add element in the begining of the array
// a.shift()   // remove the element from the begining of the array
// index=a.indexOf(11)  // give the index of the element it give -1 if the element is not present in the array
// a.sort()   // it sort the array in the ascending order
// a.sort().reverse()   // it sort the array in the descending order

// // // a.splice(insert from index,how many element to remove or put 0 if you want to delete nothing and just want to add element,element to add(optional))
// a.splice(2,1,5,50);  // it is used to add element in the array 
// // a.splice(2,1)  // it is used to remove element in the array
// // a.slice(1,3)  // it is used to get the element of the array
// console.log(a);

// let max=Math.max(...a); // ... operator is used to spread the array elements
// console.log(max); // 100
// let b=[18,19,20];
// let c=[...a,...b];
// console.log(c.length);
// console.log(...a,...b);
// let c="ABC112@";
// let b=[...c].join("+");
// console.log(b); // A+B+C+1+1+2+@

// let fruits =["mango","apple"];
// let vegetables =["tomato","potato"]

// let food =[...fruits,...vegetables,"extra1","extra2"];
// console.log(food) // ['mango', 'apple', 'tomato', 'potato', 'extra1', 'extra2']