// sync code = means it runs line by line , lower code waits for the code written above it to comeplete

// async code = means it will not wait for the completion of the above task , even though it will start the above code but not wait for its completion

// we can made async code to sync by using callbacks , promise , awaits etcs

function fun1(callback){
    setTimeout(() => {console.log("task 1");
        callback();},3000);   // we are wating for 3 seconds then we will execute console.log("task 1") and call fun2()
    }
function fun2() {
    console.log("task 2");
}

fun1(fun2);