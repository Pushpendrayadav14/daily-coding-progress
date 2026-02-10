
// SECTION 1: Objects and OOPS Thinking (Foundation)
// 	1.	Create a user object that stores name and email and has a login method which prints “User logged in”.
// let user={
//     name:"pal",
//     email:"paldlfndsn@gmail.com",
//     login:function(){
//         console.log("User Logged in");
//     }
// }
// user.login();


// 	2.	Imagine you now have 5 users.
// First, think how you would manage them without using a class.
// Then convert the same logic using a class and observe how the code becomes cleaner. Write code for both approaches.
// class user0{
//     constructor(name,email){
//         this.name=name;
//         this.email=email;
//     }
//     login(){
//         console.log(`${this.name} is logged in`);
//     }
// }
// let user1=new user0("ajay","ajfdskfkldnln");
// console.log(user1);
// let user2=new user0("vijay","shfkdshfdn");
// console.log(user2)
// user1.login();
// user2.login();
// 	3.	Create a product object that stores name and price and has a method which returns the final price after discount.

// The goal of this section is to understand why keeping data and behavior together makes code easier to manage.

// class product{
//     constructor(name,price){
//         this.name=name;
//         this.price=price;
//     }
//     getFinalPrice(discount){
//         return this.price - (this.price * discount);
//     }
// }
// let prod1=new product("phone",10000);
// console.log(prod1.getFinalPrice(0.07));

// ⸻

// SECTION 2: Classes and Objects
// 	4.	Create a Car class with the following:
// brand
// speed
// a drive method that prints the car brand and speed
// class car{
//     constructor(brand,speed){
//         this.brand=brand;
//         this.speed=speed;
//     }
//     drive(){
//         return `${this.brand} is driving at ${this.speed} km/h`;
//     }
// }
// let car1=new car("BMW",120);
// console.log(car1.drive());

// 	5.	Create two different car objects from the same class and verify that their data is different.
// let car2=new car("Audi",150);
// console.log(car2.drive());
// let car4= new car("Mercedes",130);
// console.log(car4.drive());

// 	6.	Answer this in your own words:
// If classes did not exist, how would you write this logic and what problems might occur when the project becomes large?

// ⸻

// SECTION 3: Constructor and this keyword
// 	7.	Create a Student class whose constructor accepts name and roll number.
// Add a method introduce that prints both values.
// class student{
//     constructor(name,rollno){
//         this.name=name;
//         this.rollno=rollno;
//     }
//     introduce(){
//         return `My name is ${this.name} and my roll number is ${this.rollno}`;
//     }
// }
// let std1=new student("pushpa",101);
// let std2=new student("kavi",102);
// console.log(std1.introduce());
// console.log(std2.introduce());
// 	8.	Inside the constructor, set values using this.
// Then try removing this and notice what error occurs and why.

// 	9.	Create an object with two methods:
// One method using a normal function
// One method using an arrow function

// Inside both, print this and observe the difference.
// let object={
//     normalMethod:function(){
//         console.log(this);
//     },
//     arrowMethod: ()=>{
//         console.log(this);
//     }
// }
// object.normalMethod();
// object.arrowMethod();

// The goal is to clearly understand how this works and when it changes.

// ⸻

// SECTION 4: Constructor Functions and Prototypes
// 	10.	Create a User constructor function (do not use class syntax).
// 	11.	Add a login method in two ways:
// First, inside the constructor
// function user(name,email){
//     this.name=name;
//     this.email=email;
//     this.login=function(){
//         console.log(`${this.name} is logged in`);
//     }
// }

// let usera=new user("ram","asbfksdbfkbs");
// usera.login();
// Then, move the method to the prototype

//ye sab javascript ke ES6 version ke pehle hota tha 
// function user(name,email){
//     this.name=name;
//     this.email=email;
// }
// user.prototype.login=function(){
//     console.log(`${this.name} is logged in`);
// }

// let usera=new user("shyam","asbfksdbfkbs");
// usera.login();


// 	12.	Create two User objects and compare their login methods using equality.
// Explain why the result is true or false.

// The purpose here is to understand how prototypes help share behavior efficiently.

// ⸻

// SECTION 5: call, apply, bind
// 	13.	Create a function that prints this.name.
// 	14.	Create an object that contains a name property.

function printName(a,b,c,d){
    console.log(this.name);
    console.log(a,b,c,d);
}
let obj ={
    name:"pal"
};


// Use call to run the function using the object
// printName.call(obj);
// Use apply to run the function using the object
// printName.apply(obj,[1,2,3,4]);
// Use bind to create a new function and then call it
printName.bind(obj,5,6,7,8)();
// 	15.	Borrow a method from one object and run it for another object using call.

// The goal is to understand how this can be manually controlled.
// Displaying Day 58 - Question Sheet 1.md.