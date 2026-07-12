// // console.log("hello world");
// // console.log(`my age is ${20+3}`);

// const { spread } = require("axios");

// // let x=10;
// // const pi=3.14;
// // let y=20;

// // console.log(x);
// // console.info(pi);
// // console.warn(y);
// // alert("hello world");
// // let name=prompt("enter your name");
// // console.log(`my name is : ${name}`);

// let str="javascript";
// console.log(str.slice(0,4));
// let aa=[12,13,14,14,154,16,18,17,19,20];
// console.log(aa.splice(2,5));
// console.log(str.split(","));
// console.log(str.replace("java","python"));
// console.log(str.includes("java"));
// console.log(str.toUpperCase());
// let z;
// console.log(z);
// let a=false;
// console.log(typeof(a));
// let b=null;
// console.log(typeof(b),b);
// console.log("abs"/10);
// console.log(10/0);

//hoisting
// var z;
// console.log(y);
// console.log(z);
// z=5;
// var y=20;
// console.log(x);
// let x=10;

// let age = prompt("enter your age");

// if(age>=18){
//     console.log("you are eligible for voting");
// }else if(age<18 && age>1){
//     console.log("you are not eligible for voting");
// }else{
//     console.log("you are not axist in the world");
// }

// let num = prompt("enter your number");

// let result = num%2==0 ? "even number" : "odd number";
// console.log(result);

// for(let i=0;i<=10;i++){
//     console.log(i);
// }
// let i=1;
// while(i<=10){
//     console.log(`5 * ${i} = ${5*i}`);
//     i++;
// }

// let i=1;
// do{
//     console.log(`2 * ${i} = ${2*i}`);
//     i++;
// }while(i<=10);

// //forEach loop : work only with array
// let fruits=["apple","banana","mango","grapes"];

// fruits.forEach(function(value,index){
//     console.log(`index is : ${index} and value is : ${value}`);
// })

// //for...in Loop : Used to iterate over the keys (properties) of an object.

// let student = {
//     name:"john",
//     age:20,
//     city:"new york"

// }
// for(let key in student){
//     console.log(`key is : ${key} and value is : ${student[key]}`);
// }

//for...of Loop: Used to iterate over iterable objects like arrays, strings, maps, and sets.

// let str="javascript";
// for(let ft of fruits){
//     console.log(ft);
//     let fhal = ft;
//     for(let ch of fhal){
//         console.log(ch);
//     }
// }
//recurtion : function calling itself is called recurtion

// function factorial(n){
//     if(n==0 || n==1){
//         return 1;
//     }
//     console.log(n);
//     return n*factorial(n-1);
// }

// console.log(factorial(5));

//break: Immediately exits the current loop or switch statement.
// for(let i=1;i<=10;i++){
//     if(i==8){
//         break;
//     }
//     console.log(i);
// }
// continue statement: Skips the current iteration of the loop and moves to the next iteration.
// for(let i=10;i<=20;i++){
//     if(i==15){
//         continue;
//     }
//     console.log(i);
// }

// function name(name){
//     console.log(`my name is : ${name}`);
// }
// name("pal");
// function add(...numbers){
//     let sum = 0 ;
//     for(let i=0;i<numbers.length;i++){
//         sum += numbers[i];
//     }
//     console.log(`sum is : ${sum}`);
// }
// add(5,10,15,20);

//Function Hoisting : Function declarations are completely hoisted, so they can be called before they are declared.

// name("pushpa");
// function name(name="pal"){
//     console.log(`my name is : ${name}`);
// }

//Destructured Parameters: Extract object or array properties directly in the parameter list.
// function show({name, age}){

// console.log(name, age);

// }

// show({
// name:"Pal",
// age:21
// });

//Spread Operator (...): Spread expands an array or object into individual values.

// let arr = [1,3,4,5,6,8,9,2,7];
// console.log(...arr);

// function add(a,b,c,d){
//     console.log(a+b+c+d);
// }

// let num=[10,20,30,40,60,90,80];
// add(...num);

//nested function : A function defined inside another function is called a nested function. The inner function has access to the variables and parameters of the outer function.
//Scope Chain:An inner function can access variables from its own scope and all outer scopes.

// function outer(){
//     let a=10;
//     function inner(){
//         let b=20;
//         console.log(a+b);
//         console.log("inner function ")
//     }
//     inner();
// }

// outer();

//IIFE (Immediately Invoked Function Expression): An IIFE is a function that executes immediately after it is created.

// (function(name){
//     console.log(`my name is : ${name}`);
// })("pal");

// //arow iife function
// ((age)=>{
//     console.log(`my age is : ${age}`);
// })(21);

//Arrow Function (Fat Arrow): A shorter syntax for writing functions using =>.
//  let sum = (a,b) => a+b;
//  console.log(sum(10,20));

//  let square = n=>n*n;
//  console.log(square(5));

//  //Anonymous Function: A function without a name, often used as a callback or assigned to a variable.
//  setTimeout(function(){
//     console.log("hello world");
//  },3000);

//  setInterval(()=>{
//     console.log("jay shree ram");
//  },3000);

//Higher Order Function (HOF): A function that takes another function as an argument or returns a function as its result.

// function higherOrderFunction(highorder){
//     highorder();
// }

// higherOrderFunction (()=>{
//     console.log("this is a higher order function");
// });

//Callback Function: A function passed as an argument to another function, which is then invoked inside the outer function.

// function callbackFunction(name,callback){
//     console.log(`my name is : ${name}`);
//     callback();
// }

// callbackFunction("pal",()=>{
//     console.log("this is a callback function");
// });

//First Class Function: Functions in JavaScript are first-class citizens, meaning they can be treated like any other value (assigned to variables, passed as arguments, returned from other functions).

// const firstClassFunction = ()=>{
//     console.log("this is a first class function");
// };

// firstClassFunction();

//Pure Function: A pure function is a function that, given the same input, will always return the same output and does not have any side effects (does not modify external state).
// const pureFunction = (a,b)=>{
//     return a+b;
// }
// console.log(pureFunction(10,20));

//Impure Function: An impure function is a function that may produce different outputs for the same input or has side effects (modifies external state).

// let count = 10;
// const impureFunction = (n)=>{
//     count+=10
//     console.log(count);
// }

// impureFunction();

// Global Scope:
// let name="jaadu";
// function nameWriter(){
//     console.log(`my name is : ${name}`);
// }
// nameWriter();

//Closures: A closure is created when an inner function remembers and accesses variables from its outer function even after the outer function has finished executing
// function outer(){
//     let counter =0 ;

//     return function (){
//         counter++;
//         console.log(counter);
//     }
// }

// let counter = outer();

// counter();
// counter();
// counter();

//Scoping Rule (Lexical Scope): JavaScript uses lexical scoping, meaning a function can access variables based on where it is defined, not where it is called.
// let a=10;
// function outer(){
// let b=20;
// function inner(){
//     console.log(`value of a: ${a}`);
//     console.log(`value of b: ${b}`);
// }
// inner()
// }
// outer();

//array:

// let arr= new Array(10,20,30,49,95);
// console.log(arr);

// //Accessing Array Elements: Array elements are accessed using their index (starts from 0).
// // console.log(arr[0],arr[3]);
// // //push() : add element at end of the array
// // arr.push(500);
// // console.log(arr);
// // //pop():Removes the last element.
// // arr.pop();
// // console.log(arr);
// // //shift():remove the first element of array
// // arr.shift();
// // console.log(arr);
// // //unshift() : add one or more element on the beggining
// // arr.unshift(12,34);
// // console.log(arr);
// // //indexOf() : Returns the index of the first matching element, or -1 if not found.
// // console.log(arr.indexOf(49));
// //Array Destructuring : Extract array elements into separate variables.
// let [a,b,c,d]=arr;
// console.log(a,b,c,d);

// //filter():Returns a new array containing only elements that satisfy a condition.
// let even = arr.filter(n=>n%2==0);
// console.log(even);

// //some():Returns true if at least one element satisfies the condition.
// console.log(arr.some(n=>(n>30)));

//. map(): Creates a new array by transforming every element.
// let arr = [2,4,6,8,10,1,3,5,7,9];
// let square = arr.map(n=>n*n);
// console.log(square);

//reduce(): Reduces an array to a single value.
// let sum = arr.reduce((acc,n)=>acc+n);
// console.log(sum);

//Spread Operator:Expands an array into individual elements.
// let copy = [...arr];
// console.log(copy);
//slice():Returns a portion of an array without modifying the original.

// let spl = arr.slice(0,4);
// console.log(spl);
// console.log(arr);

//reverse():reverse the original array
// console.log(arr.reverse());

//sort():Sorts array elements (alphabetically by default).
// arr.sort((a,b)=> a-b);
// console.log(arr);

//join(): Converts an array into a string using a separator.
// console.log(arr.join("_"));

//toString(): Converts an array into a comma-separated string.
// let ft  = ["apple","mango","bannana","pinappl"];
// console.log(ft.toString());

//Iterating Arrays (for):Use a for loop when you need index control.;
// for(let i=0;i<arr.length;i++){
//     console.log(arr[i]);
// }

//Iterating Arrays (forEach): forEach() executes a callback for every array element.
// ft.forEach(num=>console.log(num));

//Objects:An Object stores data as key-value pairs.
//Delete Property: delete removes a property from an object.

// let student = {
//     name:"pushpa",
//     age:21,
//     rollno:"en22cs301773"

// }

// console.log(student.name);
// console.log(student["age"]);
// delete student.rollno;
// console.log(student);

//Nested Objects: An object can contain another object.;
// let user={

// name:"Pal",

// address:{

// city:"Indore",

// pin:452001

// }

// };

// console.log(user.address.pin);

//How Objects are Stored: Objects are reference types, so variables store a reference (memory address), not the actual object.
// let obj1={name:"pushpa",age:21};
// let obj2=obj1;
// obj2.name="pal";
// console.log(obj1.name);

// //Traverse Object Keys:Use for...in or Object.keys().

// for(let key in obj1){
//     console.log(key);
// }

//arary as object:Arrays are special types of objects with numeric indexes.
// let arr = ["a","b","c","d"];
// console.log(typeof(arr));

//setTimeout(): Executes code once after a specified delay.
// setTimeout(()=>{
//  console.log("jay shree ram");
//  setTimeout(()=>{
//     console.log("Wellcome")
//  },5000);

// },2000);

//clearTimeout():Cancels a scheduled setTimeout().

// let id = setTimeout(()=>{
//     console.log("jay shree ram");
// },5000);
// clearTimeout(id);
//setInterval(): Executes code repeatedly after a fixed interval.
// setInterval(()=>console.log("ram ram bhai") ,3000 );

// let id = setInterval(()=>console.log("ram ram bhai") ,3000 );
// clearInterval(id);

//Object.freeze(): Prevents adding, deleting, or modifying object properties.
// let obj = {name:"pushpa"};
// Object.freeze(obj);
// obj.name="pal";
// console.log(obj);

//Object.seal(): Prevents adding or deleting properties, but allows modifying existing ones.
// let obj1 = {name:"Sohan"};
// Object.seal(obj1);
// delete obj1.name;
// obj1.name="rakesh";
// console.log(obj1);

// //Object Destructuring: Extract object properties into variables.

// let std = {
//     name:"pal",
//     age:21,
//     rollno: "en22cs301773"
// }
// let {name,age} = std;

// console.log(std.rollno);

//Object Methods:
// let student={
//     name:"Pushpendra",
//     age:21,
//     rollno:"en22cs301773",
//     subjects(){
//         console.log("B.tech CSE");
//     }
// };
// student.subjects();

// let person={

// name:"Pal",

// greet(){

// console.log("Hello");

// }

// };

// person.greet();

//this Keyword: this refers to the object that is calling the method.
// let person = {
//     name:"pushpa",
//     show(){
//         console.log(this.name);
//     }
// }
// person.show();

//DOM
//getElementById(): Selects one element by its unique id.
// let heading = document.getElementById("title");
// console.log(heading);
// console.log(document);

//getElementsByTagName():Returns all elements with the given tag name as an HTMLCollection.
// let para = document.getElementsByTagName("p")
// console.log(para);
//getElementsByClassName(): Returns all elements with the specified class name.
// let hd = document.getElementsByClassName("box1");
// console.log(hd);
// //querySelector(): Returns the first matching element using a CSS selector.
// let box = document.querySelector(".box1");
//querySelectorAll(): Returns all matching elements as a NodeList.
// const items = document.querySelectorAll(".box");

//parentNode: Returns the parent node of an element.
// const p = document.getElementById("yoyo");
// console.log(p.parentNode);

// //childNodes: Returns all child nodes, including text nodes (like spaces and line breaks).
// const body = document.body;
// console.log(body.childNodes);

//firstChild: Returns the first child node (can be a text node).
// console.log(document.body.firstChild);
//nextSibling:Returns the next sibling node (may be a text node).
// const h1 = document.querySelector("h1");

// console.log(h1.nextSibling);

//innerHTML: Gets or sets HTML content inside an element.
// let id=document.getElementById("title").innerHTML="<b>Welcome to Pushpa </b>";
// console.log(id);
//textContent: Gets or sets only plain text (HTML tags are treated as text).
// document.getElementById("title").textContent="Hello";
//setAttribute(): Adds or updates an attribute on an element.
// const img = document.querySelector("img");
// img.setAttribute("src","https://imgs.search.brave.com/Kk457PSPcgoiDVXWJl-om2YKIdo1kycwqSSKu_9Clmg/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9keW5h/bWljLmRlc2lnbi5j/b20vYXNzZXQvbG9n/by85YmY5Nzc3OC03/OWVmLTQwNmYtOWIx/My05Y2MxNTg0NjBh/YWUvbG9nby1zZWFy/Y2gtZ3JpZC0yeD9s/b2dvVGVtcGxhdGVW/ZXJzaW9uPTImdj02/MzkxMjg2MjA0NjYz/MDAwMDAmbGF5b3V0/PWF1dG8tMS0x");

// //getAttribute(): Returns the value of an attribute.;
// console.log(img.getAttribute("src"));

//style Property:Used to change CSS styles using JavaScript.
// let box1 = document.querySelector(".box1");
// box1.style.background="yellow";
// box1.style.color="green";

//createElement():Creates a new HTML element.
// const p = document.createElement("p");

// p.textContent = "Hello";

// //appendChild():Adds a child element at the end of a parent element.
// document.body.appendChild(p);

//insertBefore(): Inserts a new node before an existing node
// const ul = document.querySelector("ul");

// const li = document.createElement("li");

// li.textContent = "New";

// ul.insertBefore(li, ul.firstChild);
//removeChild():Removes a child element from its parent.;
// const parent = document.querySelector("ul");
// const child = parent.firstElementChild;
// parent.removeChild(child);

//Event Handling: Event Handling means executing JavaScript code when a user performs an action (click, keypress, mouse movement, etc.).
// addEventListener(): addEventListener() attaches an event to an HTML element.
// const btn = document.getElementById("btn");
// btn.addEventListener("click",()=>{
//     alert("button was clicked");
// })

//Event Bubbling:When an event occurs on a child element, it first executes on that element and then propagates upward through its parent elements
// document.getElementById("box1").addEventListener("click",()=>{
//     console.log("parent click");

// })

// document.getElementById("btn").addEventListener("click",(event)=>{
//     console.log("button is click");
//     event.stopPropagation();

// })

//event.target:event.target returns the element that actually triggered the event.
// document.getElementById("btn").addEventListener("click",(event)=>{
//     console.log(event.target);
// })

// //Scroll Event: The scroll event occurs when the page or an element is scrolled.
// window.addEventListener("scroll",()=>{
//     console.log(window.scrollY);
// })
//Mouse Events: Mouse events occur when the user interacts using the mouse.

// Common Mouse Events
// click
// dblclick
// mouseenter
// mouseleave
// mousemove
// let box = document.getElementById("box1");
// box.addEventListener("click",()=>{
//     box.style.background="red";

// })
// box.addEventListener("dblclick",()=>{
//     box.style.background="black";
// })
// box.addEventListener("mouseenter",()=>{
//     box.style.background="pink";
// })
// box.addEventListener("mouseleave",()=>{
//     box.style.background="green";
// })
// box.addEventListener("mousemove",()=>{
//     console.log("mouse move");

// })

// //Keyboard Events: Keyboard events occur when keys are pressed or released.
// document.getElementById("name").addEventListener("keydown",(event)=>{ console.log(event.key); });

//Forms
// const form = document.getElementById("form");
// form.addEventListener("submit",(e)=>{

//     const name = document.getElementById("name").value;
//         if(name===""){
//         alert("name requeard")
//     };
//      e.preventDefault();
//     console.log(name);

// })

//. Form Validation: Validation checks whether user input is correct before submitting.

// preventDefault(): Stops the browser's default action.

//form.addEventListener("submit",(event)=>{ event.preventDefault(); console.log("Submitted"); });
//onsubmit:Runs when a form is submitted.
//document.getElementById("city").addEventListener("change",(e)=>{ console.log(e.target.value); });

//DOMContentLoaded : Runs after the HTML document has been completely parsed
//document.addEventListener("DOMContentLoaded",()=>{ console.log("DOM Ready"); });
//load: runs after the entire page (HTML, CSS, images, etc.) has finished loading.
//window.addEventListener("load",()=>{ console.log("Everything Loaded"); });

//resize: Runs whenever the browser window size changes.
// window.addEventListener("resize",()=>{ console.log(window.innerWidth); });
//scroll: Runs whenever the page is scrolled.
// window.addEventListener("scroll",()=>{ console.log(window.scrollY); });

//Browser Object Model (BOM): The Browser Object Model (BOM) allows JavaScript to interact with the browser (window, history, location, navigator, etc.).
// Main BOM Objects
// window
// navigator
// history
// location
// document (part of DOM but accessible through window)
// console.log(window);
// console.log(navigator);
// console.log(history);
// console.log(location);
// console.log(document);

//window Object: window is the global object of the browser. All global variables and browser APIs belong to it.
// console.log(window.innerHeight);
// console.log(window.innerWidth);
// window.alert("hello dost");

//window.location: window.location provides information about the current URL and allows navigation.
// console.log(window.location.href);
// console.log(window.location.hostname);
// console.log(window.location.pathname);

//window.history: history allows navigation through the browser's history.
// window.history.back();
// window.history.forward();
// window.history.go(-2);

//Local Storage: Local Storage stores data permanently until it is manually removed.
// localStorage.setItem("name","Pal");
// console.log(localStorage.getItem("name"));
// // // localStorage.removeItem("name");
// // localStorage.clear();

// //Session Storage: Session Storage stores data only until the browser tab is closed.
// sessionStorage.setItem("city","Indore");

//Cookies: Cookies are small pieces of data stored by the browser and sent with HTTP requests to the server.
// document.cookie = "userName=pal";
// document.cookie = "name=Pal; expires=Fri, 09 july 2026 12:52:00 UTC";
// console.log(document.cookie);
//Fetch API: The Fetch API is used to make HTTP requests to servers and APIs.
// const btn = document.getElementById("btn");
// const list = document.getElementById("list");

// btn.addEventListener("click", () => {
//   fetch(`https://jsonplaceholder.typicode.com/users`)
//     .then((response) => response.json())
//     .then((user) => {
//       user.forEach((user) => {
//         const li = document.createElement("li");
//         li.textContent = user.name;
//         list.appendChild(li);
//       });
//     })
//     .catch((error) => console.log(error));
// });

//Fetch using async/await: async/await provides a cleaner way to write asynchronous code compared to chained .then() calls.
//  async function getUser(){
//     try{
//         const respones = await fetch(`https://jsonplaceholder.typicode.com/users`);
//         const data = await respones.json();
//         console.log(data);
//     }
//     catch(error){
//         console.log(error);
//     };

//  }

//  //Class : A class is a blueprint used to create objects.
// // class person{
// //     constructor(name,age){
// //         this.name = name;
// //         this.age = age;
// //     }
// // }

// // // let pp = new person("pushpa",21);
// // console.log(new person("pushpa",21));

// //Constructor: A constructor is a special method that automatically runs when an object is created.
// // class car{
// //     constructor(brand){
// //         this.brand = brand;
// //     }
// // }

// // console.log(new car("BMW"));

// //this Keyword: this refers to the current object that is calling the method.
// class student{
//     constructor(name,rollNo){
//         this.name = name;
//         this.rollNo = rollNo;
//     }
//     show(){
//         console.log(this.name);
//         console.log(this.rollNo);
//     }
// }

// let std1 = new student("pushpa","en22cs");
// std1.show();

//Prototype: A prototype allows objects to share methods without creating duplicate copies.
// function person(name){
//     this.name = name;
// }
// person.prototype.greet = function(){
//     console.log(`hello ${this.name}`);
// }
// const p1 = new person("pal");
// p1.greet();

//call(): call() invokes a function immediately by setting the value of this and passing arguments individually.
// const student={
//     name: "pal"
// }

// function greet(city){
//     console.log(`${this.name} ${city}`);
// }
// greet.call(student,"Bhopal");

//apply(): apply() works like call(), but arguments are passed as an array.
// const student={
//     name: "pal"
// }

// function greet(city,state){
//     console.log(`${this.name} ${city} ,${state}`);
// }
// greet.apply(student,["Bhopal","M.P."]);

//bind(): bind() returns a new function with a fixed value of this without executing it immediately.
// const student={
//     name: "pal"
// }

// function greet(){
//     console.log(`${this.name}`);
// }
// const st = greet.bind(student);
// st();

//Inheritance: Inheritance allows one class to acquire the properties and methods of another class using extends.
// class animal{
//     eat(){
//         console.log("Eating");
//     }
// }
// class Dog extends animal{
//     bark(){
//         console.log("Barking");
//     }
// }

// let dog = new Dog();
// dog.eat();
// dog.bark();

//super Keyword: super() calls the parent class constructor.

// class person{
//     constructor(name){
//         this.name = name;
//     }
// }

// class student extends person{
//     constructor(name,cource){
//         super(name);
//         this.cource = cource;
//     }
// }

// const s1 = new student("Pushpendra","MERN");
// console.log(s1.name);
// console.log(s1.cource);

//Getter: A getter allows you to access a property like a normal variable while executing a function.
// class User {
//   constructor(name) {
//     this._name = name;
//   }
//   get name() {
//     return this._name;
//   }
// }
// const user = new User("Pal");
// console.log(user.name);

//Setter: A setter updates a property's value through a function.
// class User {
//   constructor(name) {
//     this._name = name;
//   }
//   set name(value) {
//     this._name = value;
//   }
// }
// const user = new User("Pal");
// user.name = "Rahul";
// console.log(user.name);

//Asynchronous Programming: Asynchronous Programming allows JavaScript to execute long-running tasks without blocking the main thread.

// console.log("Start");
// setTimeout(()=>{
//   console.log("Middel");

// },3000);
// console.log("End");

//Callback Function: A callback is a function passed as an argument to another function and executed later.\
// function greet(name,callback){
//   console.log("hello " + name);
//   callback();
// }

// function done(){
//   console.log("Complited");
// }

// greet("pushpendra",done);

//Callback Hell: Callback Hell occurs when multiple nested callbacks make code difficult to read and maintain.
// login(function(){
//   console.log("enter into login function");
//   getProfile(function(){
//     console.log("enter into user profile function")
//     getData(function(){
//       console.log("enter into getdata function");
//       console.log("Done");
//     });
//   });
// });

//Promise: A Promise represents the eventual completion or failure of an asynchronous operation.
// const promis = new Promise((resolve,reject)=>{
//   let success = true;
//   if(success){
//     resolve("Data Loded");
//   }else{
//     reject("Faild");

//   }
// });

// promis.then(result=>{
//   console.log(result);
// })
// .catch(error=>{
//   console.log(error);
// })

//Promise Chaining: Multiple asynchronous operations can be executed sequentially using .then().
// Promise.resolve(10)
// .then(num=>num*2)
// .then(num=>num + 5)
// .then(result=>{
//   console.log(result);
// })

//async Function: async makes a function always return a Promise.
// async function greet(){
//   return "hello";
// }
// greet().then(console.log);
//await Keyword: await pauses execution inside an async function until a Promise is resolved.
// async function show(){
//   const data = await Promise.resolve("JavaScript");
//   console.log(data);
// }
// show();

//async/await (Avoid Callback Hell): sync/await makes asynchronous code look like synchronous code and avoids deeply nested callbacks.
// async function getData(){
//   try{
//     let response = await fetch(`https://jsonplaceholder.typicode.com/users`);
//     let data = response.json();
//     console.log(data);
//   }
//   catch(error){
//     console.log(error);
//   }
// }
// getData();
//Error Handling (try...catch): try...catch handles errors in async/await code.
//Event Loop (Interview Concept): The Event Loop continuously checks the Call Stack and Callback Queue. When the Call Stack becomes empty, it moves ready callbacks from the Callback Queue to the Call Stack.
// console.log("A");
// setTimeout(()=>{
//   console.log("B");

// },0);
// console.log("C");

//Error Object: When an error occurs, JavaScript creates an Error Object containing useful debugging information.
// try {
//   x();
// } catch (error) {
//   console.log(error.message);
//   console.log(error.name);
//   console.log(error.stack);
// }

//try...catch: try executes code, and catch handles any error that occurs.
// try {
//   console.log(user.name);
// } catch (error) {
//   console.log(error);
// }

//try...catch...finally: finally always executes, whether an error occurs or not.
// try{
//   console.log("TRY");
// }catch{
//   console.log("CATCH");
// }finally{
//   console.log("FINALLY");
// }

//throw: throw is used to create and throw your own errors.
// let x=11;
// if(x<18){
//   throw new Error("AGE must greeter than 18");
// }

//Error Handling in Async Code: Use try...catch inside an async function to handle asynchronous errors.
// async function getData(){
//   try{
//     const response = await fetch(`wrong data`);
//   }catch(error){
//     console.log(error.message);
//   }

// }
// getData();

//JSON.stringify(): Converts a JavaScript object into a JSON string.
// let user = {
//   name: "Pushpa",
//   age: 21,
// };
// const json = JSON.stringify(user);
// console.log(json);

//SON.parse(): Converts a JSON string into a JavaScript object.
const json = '{"name":"Pal","age":21}';
const user = JSON.parse(json);
console.log(user.name);
