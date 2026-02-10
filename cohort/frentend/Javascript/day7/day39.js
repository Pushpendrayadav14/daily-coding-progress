///###########PRACTIC SATION #######////

// Level 1 - Basic Function, Array & Object Code Tasks (Easy)

// 1. Write a function sayHello() that prints "Hello JavaScript".
// function sayHello(){
//     console.log("Hello JavaScript");
// }
// sayHello();
// // 2. Create a function add(a, b) that returns their sum and log the result.
// function add(a,b){
//     return a+b;
// }
// console.log(`a+b: ${add(5,10)}`);

// // 3. Write a function with a default parameter name = "Guest" that prints "Hi <name>".
// function greet(name="Guest"){
//     console.log("hi "+name);
// }
// greet("pal");
// greet();

// // 4. Use rest parameters to make a function that adds unlimited numbers.
// function addNumbers(...num){
//     let sum=0;
//     for(let i=0;i<num.length;i++){
//         sum=sum+num[i];
//     }
//     console.log(`Sum of all the numbers which are present in array: ${sum}`);
// }
// addNumbers(21,14,3,21,24,35,47,56);

// function addNumbers(...num){
//     let sum=0;
//     num.forEach(function (val){
//         sum=sum+val;
//     });
//      console.log(`Sum of all the numbers which are present in array: ${sum}`);
// }
// addNumbers(21,14,3,21,24,35,47,56);

// function addNumbers(...num){
//     let sum =num.reduce(function (acc,val){
//         return acc+val;
//     },0);
//     console.log(`Sum of all the numbers which are present in array: ${sum}`);
// }
// addNumbers(21,14,3,21,24,35,47,56);

// // // 5. Create an IIFE that prints "I run instantly!".
// (function(){
//     console.log("I run instantly!!");
// })();

// // 6. Make a nested function where the inner one prints a variable from the outer one
// function outer(){
//     let outerVar="i am from the outer varable ";
//     function inner(){
//         console.log(outerVar);
//     }
//     inner();
// }
// outer();

// // 8. Use a for loop to print all elements of an array.
// let arr=[21,22,24,35,67];
// for(let i=0;i<arr.length;i++){
//     console.log(`arr[${i}]=${arr[i]}`);
// }


// // 9. Create an object person with keys name, age, and city, and print each key's value.
// let person={
//     name:"pal",
//     age:21,
//     city:"indore"
// }
// // console.log(`Name: ${person.name} Age: ${person.age} City:${person.city}`);
// for(let key in person){
//     console.log(`${key}: ${person[key]} `);
// }

// // 10. Use setTimeout() to log "Time's up!" after 2 seconds.
// setTimeout(function(){
//     console.log("Time's up 2 sec is over!");
// },2000);

//Level 2 - Functional Thinking & Logic Tasks

// (Intermediate)
// 1. Write a higher-order function runTwice(fn) that takes another function and executes it two times.
function runtwice(fn){
    fn();
    fn();
}
runtwice(function (){
    console.log("function is running ");
});
// 2. Create one pure function that always returns the same output for a given input, and one impure function using a global variable.
// let inpute=Number(prompt("enter a number:"));
// function pureFunction(){
//     return inpute*2;
// }
// console.log(`pure function output : ${pureFunction()}`);
let globalVar=10;
function impureFunction(num){
    globalVar++;
    return globalVar + num;
}
console.log(`impure function output : ${impureFunction(5)}`);
console.log(`impure function output : ${impureFunction(5)}`);
// 3. Write a function that uses object destructuring inside parameters to extract and print name and age. I
function prent(obj){
console.log(`name: ${obj.name}, age: ${obj.age}`);
}

prent({name:"pal",age:21});
// 4. Demonstrate the difference between normal function and arrow function when used as object methods (the this issue).
// console.log(this);
let objj={
    name:"pal",
    ff: function (){
        console.log("normal function this:",this);
    },
    ff1: ()=>{
        console.log("arrow function this:",this);
    },
}
// objj.ff();
objj.ff1();

// 5. Given an array of numbers, use map() to create a new array where each number is squared.

// 6. Use filter() to get only even numbers from an array.

// 7. Use reduce() to find the total salary from an array of numbers [1000, 2000, 3000].

// 8. Create an array of names and use some() and every()` to test a condition (e.g., all names longer than 3 chars).

// 9. Create an object user and test the behavior of Object.freeze() and `Object.seal()`Iby adding/changing keys.

// 10. Create a nested object (user → address → city) and access the city name inside it.