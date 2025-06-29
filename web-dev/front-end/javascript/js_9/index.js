// let a=[1,2,3,4,5];
// function nameb(a) {
//     for (let i = 0; i < a.length; i++) {

//         console.log(a[i]);
        
//     }
    
// }
// nameb(a)

// or we can use foreach() method it automatically iterate a function for each value by using callback it give you element index and location of array

//callback is used when we want to maintain a specific order by executing function in our desired order

let a=[2,3,4,5];
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

// // we can also use map() method which also iterate each value of array and return new array with modified values
// function square(element){
//     return element*element;
// }
// let b=a.map(square);
// console.log(b);

// .filter() makes array only for true values
// let c=a.filter(even)
// function even (element){
//     return element%2==0;
// }
// console.log(c);

//.reduce() method is used to reduce the array to single value by passing previous and next values
//first previous values is 0
// let d=a.reduce(add);
// function add(previous,next){
//     return previous+next;
// }
// console.log(d);

//settimeout this stops time in millisecond and then exexcute that function 1000ms =1s

// setTimeout(function(){
//     console.log("hello");
// },5000);

// arrow function is used to write a function in one line
// variable = (pass parameter) => {write your code}
// const b=(name,age) =>{console.log("hello "+name)
//                       console.log("your age is "+age)};
// b("adam","99");

//prectice callback
// goodbye(hello);
// function hello() {
//     console.log("hello");
// }

// function goodbye(callback) {
//     console.log("goodbye");
//     callback()
// }
// window.print();
