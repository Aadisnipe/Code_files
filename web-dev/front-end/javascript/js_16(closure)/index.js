// closure means putting one functiion in another funtion so that we can use outer funtion variable in inner functiion
                                                                       

function user(){
    let count =0;
    function inner() {
        count++;
        console.log(`This is the ${count}`);
    }
    function getcount(n) {
        console.log(count*n);        
    }
    return {inner ,getcount};   //return {fun:inner};  can also be written as return{just function name}
}
let user1= user();
user1.inner();
user1.getcount(5);
