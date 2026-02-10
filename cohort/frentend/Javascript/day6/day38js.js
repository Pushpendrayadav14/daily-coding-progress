// ### 14. Arrays and Objects in JavaScript

// - What are Arrays in JavaScript and how to Create an Array.
//ek se jadda logo ko rakhne ki jagah 
// let arr =[1312,2313,23,232,13,131,313123123,13]
// // console.log(arr[5]);

// // let arr1=[];
// // let arr2=new Array();

// // - Understand How to Accessing Elements in Array.
// // console.log(arr[3]);
// // - Functions on Arrays - [`push` , `pop` , `shift` , `unshift` , `indexOf` , `array destructuring` , `filter` , `some` , `map` , `reduce` , `spread operator` , `slice` , `reverse` , `sort` , `join` , `toString` ]
// arr.push(123);//end me add kerna 
// console.log(arr);
// arr.pop();//end  se element remove kerna 
// console.log(arr);
// arr.shift();//starting se removie kerna 
// console.log(arr);
// arr.unshift(555);//starting me add kerna 
// console.log(arr);
// arr.indexOf(232);//index batata hai
// console.log(arr.indexOf(232));
// let num=[1,2,3,4,5,6,7,8,9];
// //Array Destructuring
// let [a,b,...c]=arr;
// console.log(a,b,...c);
// let even=num.filter((n)=>n%2==0);//filter even number
// console.log(even);
// //some()
// let ss=num.some((n)=>n>5);//kya 5 se bada number hai
// console.log(ss);
// let nnn=num.map((n)=>n*2);//sabhi number ko 2 se multiply karke print kerna
// console.log(nnn);

// // reduce() : Multiple values ko ek single value me convert karta hai
// console.log(num.reduce((accumulator, currentValue)=> accumulator + currentValue, 0));
// //spread operator (...): Array ko copy ya merge karne ke kaam aata hai
// let aa=[1,3,5,7];
// let bb=[...aa,9,11,13]
// console.log(bb);
// //slice(): Array ka ek PART copy karta hai (original safe)
// let arra=[21,23,22,24,25,26,27]
// console.log(arra.slice(2,5));//index 2 se 4 tak ka part lega
// console.log(arra);//original array safe hai

// //reverse(): Array ko ulta kar deta hai (original change hota hai)
// console.log(arra.reverse());
// console.log(arra);//original array change ho gaya

// //sort():Array ko sort karta hai
// let arr2=[21,28,23,29,32,19,16];
// console.log(arr2.sort());//by default ascending order me sort karta hai

// //oin(): Array ko string me convert karta hai (separator ke sath)
// let arr3=["apple","banana","cherry","date","fig"];
// console.log(arr3.join("-"));//separator -

//toString(): Simple string me convert karta hai
// console.log(arr3.toString());


// // - Iterating Over Arrays using - [`For Loop` , `forEach` ]
// let fruits=["apple","banana","cherry","date","fig"];
// // for(let i=0;i<fruits.length;i++){
// //     console.log(fruits[i]);
// // }

// fruits.forEach((n)=>{
//     console.log(n);
// });

// // - Understanding What are Objects in JavaScript - [`key-value pair` ]
// //Object kya hota hai?:: Object = key-value pair ka collection
// let user={
//     name:"john",
//     age:30
// };
// console.log(user);
// console.log(user.name);//accessing property
// console.log(delete user.age);//deleting property
// console.log(user);

//new object
// let car = new Object();
// car.brand="toyota";
// car.type="sedan";
// console.log(car);
// console.log(car.brand);
// console.log(car["type"]);
// car.year=2020;
// car.type="suv";
// console.log(car);

// //Nested Objects kya hote hain?: Object ke andar object
// let student={
//     name:"alice",
//     age:21,
//     marks:{
//         math:50,
//         science:50,
//         english:50
//     }
// }
// console.log(student);
// console.log(student.marks.math);//accessing nested object property

// //Objects memory me kaise store hote hain?👉 Objects reference type hote hain
// let a={
//     x:10
// }
// let b=a;
// b.x=20;
// console.log(b.x);
// console.log(a.x);
// //Object ko traverse (loop) kaise kare:for...in loop
// let user1={
//     name:"bob",
//     age:25,
//     city:"new york"
// }
// for(let key in user1){
//     console.log(key+": "+user1[key]);
// }

// //Array as Object: JavaScript me array bhi object hota hai
// let arr=[10,20,30,"pal","yadav"];
// arr.name="myArray";
// console.log(arr);
// console.log(arr.name);

// - Creating Objects, Accessing Properties, Deleting Property and Nested Objects.
// - Recognise How Objects Are Stored, Traverse Keys of an Object, Array as Object.
// - Timing Events - `setTimeout()` , `setInterval()` , `clearTimeout()` , `clearInterval()`
//setTimeout()👉 Kya karta hai?:Kisi function ko ek baar, thode time baad run karta hai.
// setTimeout(()=>{
//     console.log("This message is shown after 2 seconds")
// },5000);

//clearTimeout()👉 Kya karta hai?:setTimeout ko cancel karta hai.
// let time =setTimeout(()=>{
//     console.log("This message will not be shown");

// },3000);
// clearTimeout(time);
// console.log(time);
// //setInterval()👉 Kya karta hai?:- Same function ko baar-baar fixed time interval pe run karta hai.
// let count=0;
// let interval=setInterval(()=>{
//     console.log("Interval message "+ count);
//     count++;
//     if(count==5){
//         clearInterval(interval);//setInterval ko stop karta hai.
//     }
// },2000);


// - Operation in Objects - [`freeze` , `seal` , `destructuring` , `object methods` , `this keyword`]
//Object.freeze():=👉 Kya karta hai?:Object ko completely lock kar deta hai.
let person={
    name:"abcd",
    age:90,
    adress:"xyz"
}
// Object.freeze(person);
// person.age=100;//change nahi hoga
// console.log(person);

//Object.seal()👉 Kya karta hai?:Add/Delete band, update allowed
// Object.seal(person);
// person.age=100;//change ho jayega
// person.city="new york";//add nahi hoga
// delete person.adress;//delete nahi hoga
// console.log(person);

// //Object Destructuring 👉 Kya karta hai?: Object ki properties ko direct variables me nikalta hai
// let user={
//     name:"pal",
//     age:24,
//     city:"indore"
// }
// let {name,age,city}=user;
// console.log(name,age,city);

// //Object Methods 👉 Kya hote hain?:Object ke andar function
// let laptop={
//     brand:"dell",
//     model:"inspiron",
//     start(){
//         console.log("Laptop started");
//     }
// }
// laptop.start();

// //this keyword 👉 Kya karta hai?: Current object ko refer karta hai
// let rectangle={
//     length:10,
//     width:5,
//     area(){
//         return this.length*this.width;
//     }
// };
// console.log(`area of reactangle is ${rectangle.area()}`);





















