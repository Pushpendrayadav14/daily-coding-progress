//recurcen 

//function in javascript
// function abc(){
//     console.log("khana kha lo ");
//     console.log("pehle thali lo ");
//     console.log("thali me khana dalo");
//     console.log("thali me jo lhana hai vo kha lo");
//     console.log("khana khane ye turent baad hat dho lo or sath me thali bhi dho lo ");
// };

// let ro=function(){//function expression 
//     for(let i=0;i<=5;i++){
//      console.log("ororororororororor");
//      console.log("ororororororororor");
// }
//     }
// ro();

// function sss(){
//     //function expression 
// }

//fat arrow function 
// let fng=()=>{
//     console.log("enter your name");

// }
// fng();
// abc();

// function add(v=0,b=6){
//     console.log(v+b);
// }
// add();

// function add(...vl){
//     console.log(vl);
// }
// add(2,1,4,3,5,6,7,8,9);

//return matlab jha se aaye ho vhi dal dunga
// function babu(va){
//     return 12+va;
// }
// let v=babu();
// console.log(v);

// function yoyo(val){
//     val();
// }
// yoyo(function jojo(){
//     console.log("yoyoyoyoyo pal");
// })
// function outer(){
//     let count=0;
//     return function (){
//         count++;
//         console.log(count);
//     };
// }
// const counter=outer();
// counter();
// counter();

//write an BMI calculator
// function bmi(weight,height){
//     return weight/(height*height);
// }
// console.log(bmi(61,1.6).toFixed(2));

// function doSomthing(name,age,email){
//     console.log(arguments[0]);
//     console.log(arguments[1]);
//     console.log(arguments[2]);
// }
// doSomthing("pal",21,"palyadav@gmail.com");


// - Understanding Function in JavaScript and why its widely used - [`parameters` , `arguments` , `rest parameters` , `hoisting` , `Variable Hoisting` , `Function Hoisting` ]
// - Parameters in JavaScript - [`required` , `destructured` , `rest` , `default` ]
// - Arguments in JavaScript - [`positional` , `default` , `spread` ]

// function hello(name){//<-parameter
//     console.log("hello "+name);
// }
// hello("pushpendra");//<-argumment 

//Types of Parameters

//(A) Required Parameters
//Jinhe pass karna zaroori hai.
// function add(a,b){
//     console.log(`a+b: ${a+b}`);
// }
// add(21,22);

// // (B) Default Parameters
// // Value na mile to default use hogi.
// function city(city="delhi"){
//     console.log(city);
// }
// city("bhopal");
// city();

// // (C) Rest Parameters (…)
// // Multiple values ko array me pack karta hai.
// function num(...n){
//     console.log(n);
// }
// num(1,2,3,4,5,6,7);
// num();

// //(D) Destructured Parameters
// function student({name,age}){
//     console.log(`name:${name} age:${age}`);
// };
// student({name:"pal",age:20});


//Arguments Types

// (A) Positional Arguments
// Order important!
// function area(l,b){
//     console.log(l*b);
// }
// area(4,2);

// // (C) Spread (…)
// // Array ko open kar deta hai.
// function add(a,b,c,d,e){
//     console.log(a+b+c+d+e);
// }
// add(...[1,2,3,4,5,6,7,8,]);

// Function Hoisting
// 👍 Normal Functions → Fully hoist

// yoyo();
// function yoyo(){
//     console.log("yoyoyoyoyoyoyoyoyoyoyoyoyoyoyo");
// }

// //Arrow Functions / Function Expressions → Not hoisted fully
// hello();
// const hello=()=>console.log("hello");

//📝 PRACTICE QUESTIONS (Part-1)
// ⭐ Basic

// A function square(n) banao jo n² print kare.
// function square(n){
//     console.log(n*n);
// }
// square(9);

// greet(name="Guest") default parameter ka example banao.
// function greet(name="Guest"){
//     console.log(name);
// }
// greet("pal");
// greet();

// A function banao jo rest parameters se total sum return kare.
// function tsum(...n){
//     total=0;
//     for(let i=0;i<n.length;i++){
//     total=total+n[i];
//     }
//     console.log(total);
// }
// tsum(1,2,3,4,5,6,21);


// Spread operator use karke max() function me array pass karo.
// let arr=[1,2,3,4,5,6,7,8,9];
//  let maxvalue=Math.max(...arr);
//  console.log(maxvalue);



// ⭐ Intermediate

// Required + default parameter mix karke function banao.
// function numadd(a,b,c,d,e=11){
//     console.log(a+b+c+d+e);
// }
// numadd(1,2,3,4,5);
// numadd(1,2,3,4);

// Function hoisting test karne wale 3 examples likho.


// Ek function banao jo user object ko destructure kare.
// function getuserDetails({name="pape",age=18,email="not Provided"}){
//     console.log(`user details name:${name} age:${age} email:${email} `);
// }
// getuserDetails({
//     name: "pushpa",
//     age: 21,
//     email:"oypape@gmail.com"
// });

// ⭐ Advanced

// arrow function + spread + rest ek hi code me use karo.

// let/const hoisting error reproduce karo aur explain karo.

// Function expression aur normal function me difference code likho.



// - `Classic Function`, `Nested Function`(function within function), `Scope Chain` in Javascript.
//1. Classic Function (Traditional Function
// function add(a,b){
//     console.log(a+b);
// }
// add(2,4);

// Practice Questions
// Classic function banao jo 2 numbers ka difference print kare.
// function difference(a,b){
//     console.log(a-b);
// }
// difference(10,4);

// Function banao isEven(n) → true/false return kare.
// function isEven(n){
//     if(n%2==0){
//         return true;
//     }
//     return false;
// }
// console.log(isEven(5));

// // Function banao greet(name) → welcome message de.
// function greet(name){
//     console.log("Welcome "+name);
// }
// greet("Pal");

// // Square of number find karne ka function banao.
// function square(n){
//     console.log(n*n);
// }
// square(7);


//2. Nested Function (Function inside Function)
// function outer(){
//     let x=10;
//     function inner(){
//         console.log(`inner function x: ${x}`);
//     }
//     inner();
// }
// outer();
// inner();//error

//📝 Practice Questions

// outer() ke andar inner() banao jo message print kare.
// function outer(){
//     function inner(){
//         console.log("message from inner function");
//     }
//     inner();
// }
// outer();

// // Nested function banao jo sum kare aur result ko square kare (inner).
// function outersumSquare(a,b){
//     function innersum(){
//         return a+b;
//     }
//     let sum=innersum();
//     console.log(sum*sum);
// }
// outersumSquare(5,3);

// // Outer me age lo → inner me check karo ki 18+ hai ya nahi.
// function outerAge(age){
//     function innerAge(){
//         if(age>=18){
//             console.log("Yes");
//         }else{
//              console.log("No");
//         }
//     }
//     innerAge();
// }
// outerAge(10);


// // Nested function se string length check karo.
// function stringLength(str){
//     function lengthCheck(){
//         console.log(str.length);
//     }
//     lengthCheck();
// }
// stringLength("pushpa");

//3. Scope Chain in JavaScript
// Scope chain se a → b → c print karne ka example banao.
// let a=10;
// function f1(){
//     let b=20;
//     function f2(){
//         let c=30;
//         console.log(a,b,c);
//     }
//     f2();
// }
// f1();

// //Example of Shadowing:
// Variable shadowing ka example code likho.
// let x=20;
// function j(){
//     let x=10;
//     console.log(x);
// }
// j();

//📝 Practice Questions

// Nested function bana kar outer variable print karo.
// let a=50;
// function outerFunc(){
//     function innerFunc(){
//         console.log(a);
//     }
//     innerFunc();
// }
// outerFunc();

// // Function ke andar global + local variable mix print karo.
// let g=100;
// function mixVar(){
//     let l=200;
//     console.log(`global g: ${g} local l: ${l}`)
// }
// mixVar();

// - Understanding Immediately Invoked Function Expression(IIFE).:===IIFE ek aisi function hoti hai jo define karte hi turant run ho jati hai.
// (function (){
//     console.log("IIFE function executed");
// })();
// //5. IIFE with Parameters
// (function (name){
//     console.log("Hello "+name);
// })("pushpa");
// //6. IIFE Used for Private Variables (Closure Concept)
// let counter=(function (){
//     let count=0;
//     return {
//         increment: function(){return ++count;},
//         decrement: function(){return --count;}
//     }
// })();
// console.log(counter.increment());
// console.log(counter.decrement());

// //7. Arrow Function IIFE
// ((name)=>{
//     console.log("Welcome "+name);
// })("ppppp");

// - More Functions in JavaScript - [`Arrow Function` , `Fat Arrow` , `Anonymous` , `Higher Order` , `Callback` , `First Class` , `Pure Function` , `Impure Function`]
// . Arrow Function (=>)
// Arrow function JavaScript ka shorter & cleaner function syntax hota hai.
// const add=(a,b)=>a+b;
// console.log(add(11,21));

// //3. Anonymous Function
// // Definition:A function without a name is called an anonymous function.
// // Usually used when we don't need to reuse the function.
// setTimeout(function(){
//     console.log("Anonymous Function");
// },10000);

// // 4. Higher-Order Function (HOF)
// // Definition (Easy): A function that either:
// // takes another function as argument, OR returns a function
// function calculate(a,b,operater){
//     return operater(a,b);
// }
// console.log(calculate(5,4,(x,y)=>x*y));

// //5. Callback Function
// //Definition:A function passed as an argument into another function is called a callback.
// function greet(name,callback){
//     callback(name);
// }
// greet("pal",(n)=>console.log("hello "+n));

// //6. First-Class Function
// // Definition: In JavaScript, functions are treated like variables.
// // This property is called First-Class Function.
// const greed=function(){
//     return "hello"
// };
// console.log(greed);
// //. Impure Function
// // Definition: A function becomes impure when: Output changes even if same input
// let count=0;
// function increment(){
//     return ++count;
// }
// console.log(increment());
// console.log(increment());

// Function modifies external state (side effects)
function getTime(){
    return new Date().getMinutes();
}

console.log(getTime());


// - Understanding Scoping in JS - [`Global scope` , `Function scope` ]
let x=10;//global scope
function f1(){
    let y=20;//function scoped 
    console.log("example of global scoped "+x);
    console.log("example of function scoped "+y);
}
f1();

// - Understanding `Closures`, `Scoping Rule` 
// closures are functions that have access to variables from their outer (enclosing) scope even after the outer function has finished executing.
function outer(){
    let count=0;
    function inner(){
        count++;
        console.log(count);
    }
    return inner;
}
let fn = outer();
fn();
fn();

//sccoping rule






