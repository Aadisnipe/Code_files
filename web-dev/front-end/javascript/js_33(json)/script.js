//.JSON => javascript object notation file
//it can be arrays
//a object
//array of object

//JSON.stringfy it converts a js object to a string

// const one=["Dog","Cat","Cow","Crow"];
// const jstring =JSON.stringify(one);
// console.log(jstring);

// const two={
//     "dog":"bark"
// }
// const jstring2 =JSON.stringify(two);
// console.log(jstring2);

// const three=[{
//     "dog":"bark"
// },
// {
//     "cat":"meow"
// },
// {
//     "cow":"moo"
// }]
// const jstring3 =JSON.stringify(three);
// console.log(jstring3);

//JSON.parse()
// converts json string to js object

// const onest=`["Dog","Cat","Cow","Crow"]`;
// const jsob =JSON.parse(onest);
// console.log(jsob);

// const twost=`{"dog":"bark"}`;
// const jsob2 =JSON.parse(twost);
// console.log(jsob2);

// const threest=`[{
//     "dog":"bark"
// },
// {
//     "cat":"meow"
// },
// {
//     "cow":"moo"
// }]`
// const jsob3 =JSON.parse(threest);
// console.log(jsob3);

// fetch() is a promise object

fetch("3.json")
.then(response => response.json()) //this is also a promise
.then(values=> values.forEach(value => {
    console.log(value); }))
.catch(e=>console.error(e));