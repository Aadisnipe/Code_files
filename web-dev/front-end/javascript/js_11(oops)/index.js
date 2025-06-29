// // //constructor like def __init__(Self, name, age) in python

// function person(name, age) {
//     this.name = name;
//     this.age = age;
//     this.greet = function() {
//         console.log("Hello, my name is " + this.name + " and I am " + this.age + " years old.");
//     }
// }

// const person01 = new person("Aditya", 21);
// const person02 = new person("Raj", 20);

// console.log(typeof(person01)); //creats an object

// console.log(person01.name);
// console.log(person02.name)
// person01.greet();
// person02.greet();

// // but java script constructor can also assign function 

//Classes are Es6 feature
// class Product{
//     constructor(name,price){
//         this.name=name;
//         this.price=price;
//     }
//     display(){
//         console.log(this.name + " " + this.price);
//     }
//     tax(tax_value){
//         return this.price*tax_value + this.price ;11                     
//     }
// }

// const Product01 = new Product("Laptop", 50000);
// console.log(`Total price of ${Product01.name} is $${Product01.tax(0.05)} `);

// Product01.display();

//static keyword to define static property and method in class which only exclusive to the class

// class User{
//     static usercount=0;
//     constructor(name){
//         this.name=name;
//         User.usercount++;
//     }
//     static display(){ // static method can be called without creating object and they cannot access the instance properties
//         console.log(`Total user count is ${this.usercount}`);  
//     }
// };

// const User01 = new User("Aditya");
// const User02 = new User("Raj");
// const User03 = new User("Rohan");
// User.display();
// console.log(User.usercount);

// Inheritance (inheritance is a concept of reusing the code of parent class in child class)

// class Animal{
//     alive=true;
//     eat(){
//         console.log(`This ${this.name} is eating`);
//     }
//     sleep(){
//         console.log(`This ${this.name} is eating`);
//     }
//     sounds(){
//         console.log(`This ${this.name} make sound like ${this.sound}`)
//     }
// }
// class Cow extends Animal{
//     name="cow";
//     sound="Mooo";

// }
// class Crow extends Animal{
//     name="Crow";
//     sound="Kaka";

// }
// const crow1=new Crow();
// const cow1=new Cow();
// crow1.alive=false;
// console.log(crow1.alive);
// console.log(cow1.alive);
// crow1.eat();
// crow1.sleep();
// crow1.sounds();
// cow1.sounds();

// Super keyword: used to call the parent class method from child class method (constructor is also a method)

// class Animal{
//     constructor(name,age){
//         this.name=name;
//         this.age=age;
//     }
//     move(speed){
//         console.log(`${this.name} speed is ${speed} km/hr`) // i used ${speed} because i am using parameter over here, either i will get it from the user or from the child class
//     }
// }
// class Fish extends Animal{
//     constructor(name,age,swimspeed){
//         super(name,age);
//         this.swimspeed=swimspeed;
//     }
//     swim(){
//         console.log(`This animal swims`)
//         super.move(this.swimspeed);       
//     }
// }
// class Bird extends Animal{
//     constructor(name,age,flyspeed){
//         super(name,age);
//         this.flyspeed=flyspeed;
//     }
//     fly(){
//         console.log(`This animal flys`)
//         super.move(this.flyspeed);
//     }
// }
// const Crow= new Bird("Crow",10,20);
// const shark=new Fish("Shark",50,60);
// shark.swim();

// getter and setter : with the help of setter you can manipulate the user value before passing it to the constructor
                    // with the help of getter you can change output value or output it simplely
                    // we can make a value read only or write only using these property
// class User{
//     constructor(name,age){
//         this.name=name;    //semi privarte never use this._name is constructor if you wnt to use setter
//         this.age=age;      //semi private
//     }
//     set name(newName){
//         if(typeof newName == "string" && newName.length>3){
//             this._name =newName;
//         }
//         else{
//             console.error("Marna h tereko dar nahi lagta");
//             this._name="NOT assign"
//         }
//     }
//     set age(newAge){
//         if(typeof newAge == "number" && newAge>0 && newAge<110){
//             this._age=newAge;
//         }
//         else{
//             console.error("Marna h tereko dar nahi lagta");
//             this._name="NOT assign"
//         }
//     }
//     get name(){
//         return `${this._name} hai mera username`;
//         // return this._name;
//     }
//     get age(){
//         return `${this._age} hai mera age`;
//         // return this._age;
//     }
// }
// const user01=new User("BOB",4);
// console.log(user01.name);
// console.log(user01.age);

