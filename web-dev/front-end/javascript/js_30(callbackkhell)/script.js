function task1 (callback){
    setTimeout(() => {
        console.log("Task 1");
        callback();
    }, 3000);
}
function task2 (callback){
    setTimeout(() => {
        console.log("Task 2");
        callback();
    }, 1000);
}
function task3 (callback){
    setTimeout(() => {
        console.log("Task 3");
        callback();
    }, 2000);
}
function task4 (callback){
    setTimeout(() => {
        console.log("Task 4");
        callback()
    }, 1500);
}

// callback means pass a function as an argument to another function not a function value for eg
// func1(func2()) ---> it means func1(value return by value by the func2)

// callback are like func1(()=>{
//                         func2() }) here we have passed a function not its value
//it means when fun2 is done then run fun1

task1(()=>{
    task2(()=>{
        task3((()=>{
            task4(()=>{
                console.log("All tak comepletd")
            });
        }))
    })
})
