// async/await
// async makes a function return a Promise
// await pauses the code inside an async function until the Promise is resolved

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
            let completion=true;
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
            let completion=false;
            if(completion){
                resolve("Task 3")
            }
            else{
                reject("you falided")
            }
    }, 2000);       
    })
}

async function task() {
    try{
        const task_1 =await task1();
        console.log(task_1);
        
        const task_2 =await task2();
        console.log(task_2);
        
        const task_3 =await task3();
        console.log(task_3);
        console.log("All task completed");
    }
    catch(error){
        console.error(error);
    }
    finally{
        console.log("It is the end");
    }
}
task()