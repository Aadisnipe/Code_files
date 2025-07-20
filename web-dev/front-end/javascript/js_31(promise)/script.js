// promise is a object 
// they handle asyncronous code by resolve or rejected
//resolve => when task gets completed and it can move to next 
//rejected => iif task not get completed it stops other task

function task1 (){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            let completion=true;
            if(completion){
                resolve("Task 1")
            }
            else{
                reject("you falided")
            }
    }, 3000);       
    })
}


function task2 (){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            let completion=false;
            if(completion){
                resolve("Task 2")
            }
            else{
                reject("you falided")
            }
    }, 1000);       
    })
}


function task3 (){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            let completion=true;
            if(completion){
                resolve("Task 3")
            }
            else{
                reject("you falided")
            }
    }, 2000);       
    })
}
task1().then(value => {console.log(value) ; return task2()})
.then(value => {console.log(value) ; return task3()})
.then(value => {console.log(value) ; console.log("all task compelted")})
