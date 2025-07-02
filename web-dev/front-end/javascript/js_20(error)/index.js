// error handlng is same as python

// try =try

//catch=except

//finally=finally

//throw =rasie

try{
    console.log("hii");
    throw new Error("test error"); // created a new object from Error class // we can also crate custom error by creating our won error class
}
catch(error){
    console.log("nono")
}
finally{
    console.log("this will run");
}
console.log("reach the end");