
//destructurin in js 
// //array
// let arr=[10,22,12,34,45];
// let arr2=[...arr];
// arr2.push(10,20);
// console.log(` arr2: ${arr2}`);
// console.log(` arr: ${arr}`);

//object 
// let obj={
//     name:"pushpa",
//     age:22,
//     id:123
// };
// let obj1={...obj};
// obj1.name="pal";
// console.log(obj1);
// console.log(obj);

//module js 
//import export
import user from './app63.js'
import arr from "./test63.js";
import {bestfr} from "./test63.js";
console.log( user);
console.log(`dafault arr from test.js ${arr}`);
console.log(`named export bestfriend from test.js ${bestfr}`);
