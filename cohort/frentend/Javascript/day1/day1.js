//var let const
//var is function scope and let ,const are block scoped 

// let  a=2;
// if(true){
//     let a=5;
// console.log(a);
// }
// console.log(a);

//temporal dead zone 

// console.log(a);
// var a=10;

// console.log(b);
// let b=20;
// console.log(c);
// const c=30;

// const person={name:"pal"};
// person.name="pushpa";
// // person = {name:"palllll"};

// console.log(person.name);




///data types in js ///

//primitive data types
// let name="pal";
// console.log(typeof(name));
// let age=22;
// console.log(typeof(age));
// let isApproved= true ;
// console.log(typeof(isApproved));
// let lastname;
// console.log(typeof(lastname));
// let x=null;
// console.log(typeof(x));
// let n=123456789012345678901234567890n;
// console.log(typeof(n));
// let y=typeof("name");

// //Reference Data Types
// //object array functions 
// let person ={name:"pllll",age:"22"};
// console.log(typeof(person));
// let colors=["res","green","blue "];
// console.log(typeof(colors));
// function addition(num1,num2){
//     return num1 + num2;
// }
// console.log(typeof(addition));

//dynamic typing
// let vari="pal";
// console.log(typeof(vari));
// vari=123;
// console.log(typeof(vari));

//Type Coercion (Auto-Conversion)
let a="5";
let b=5;
console.log(a==b);
console.log(a===b);
console.log(a+b);
console.log(a-b);
console.log(true===1);//false 
console.log(true==1);//true 
console.log(true+1);
console.log(null+1);//1
console.log(undefined+1);//NaN
console.log(typeof(NaN));//number
console.log(typeof(undefined));//undefined
console.log(typeof(null));//object
console.log(NaN==NaN);