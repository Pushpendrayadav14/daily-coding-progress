let prompt = require("prompt-sync")();
//Array left rotation by one
// let arr = [10, 20, 30, 40, 50];
// let temp = arr[0];
// for (let i = 1; i < arr.length; i++) {
//   arr[i - 1] = arr[i];
// }
// arr[arr.length - 1] = temp;
// console.log(`Arry left rotation by one: ${arr}`);

// //array right rotation by one
// let arr1 = [10, 20, 30, 40, 50];
// let temp1 = arr1[arr1.length - 1];
// for (let i = arr1.length - 2; i >= 0; i--) {
//   arr1[i + 1] = arr1[i];
// }
// arr1[0] = temp1;
// console.log(`Arry right rotation by one: ${arr1}`);

//array left rotation by k time
// let arr = [10, 20, 30, 40, 50];
// let k = 6;
// k = k % arr.length;
// for (let j = 1; j <= k; j++) {
//   let temp = arr[0];
//   for (let i = 1; i < arr.length; i++) {
//     arr[i - 1] = arr[i];
//   }
//   arr[arr.length - 1] = temp;
// }
// console.log(`Arry left rotation by k time : ${arr}`);

let arr = [1, 3, 5, 7, 9, 11, 7, 5, 5, 5, 2];
let t = 12;
let count = 0;
for (let i = 0; i < arr.length; i++) {
  let sum = 0;
  for (let j = i; j < arr.length; j++) {
    sum = sum + arr[j];
    if (sum == t) {
      count++;
    }
    if (sum > t) {
      break;
    }
  }
}
console.log(`the number of sub arry of an main array is : ${count}`);
