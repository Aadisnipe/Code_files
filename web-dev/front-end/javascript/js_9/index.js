// let a=[1,2,3,4,5];
// function nameb(a) {
//     for (let i = 0; i < a.length; i++) {

//         console.log(a[i]);
        
//     }
    
// }
// nameb(a)

// or we can use foreach() method it automatically iterate a function for each value by using callback it give you element index and location of array

//callback is used when we want to maintain a specific order by executing function in our desired order

let a=[1,2,3,4,5];
a.forEach(display); // for each value of array it is passing display function with element and index
function display(elemet,index){
    a[index]=elemet*2;
    console.log(a);
}

//output

// [2, 2, 3, 4, 5]
// [2, 4, 3, 4, 5]
// [2, 4, 6, 4, 5]
// [2, 4, 6, 8, 5]
// [2, 4, 6, 8, 10]