let prompt=require("prompt-sync")();

// let arr=[10,20,30,40];
// arr.push(50);
// console.log(`push 50 on arr: ${arr}`);
// arr.pop();
// console.log(`pop last elemenmt fron arr: ${arr}`);
// arr.unshift(100);
// console.log(`use unshift to add 100 on arr to frent of arrr:${arr}`);
// arr.shift();
// console.log(`remove elemnt from first position of arr: ${arr}` );

// let arr=new Array(3).fill(true);
// arr.push(10);
// arr.unshift(100);
// console.log(arr);

// let n=Number(prompt("enter the lenght of array"));
// let arr=new Array(n);
// for(let i=0;i<arr.length;i++){
//     arr[i]=prompt(`enter the value of ${i} : `);
// }

// console.log(arr);

//sum of array elements 

// let arr=[10,20,30,40,50];
// let sum=0;
// for(let i=0;i<arr.length;i++){
//     sum=sum+arr[i];
// }
// console.log(`sum of element spresent in array: ${sum}`);

// //Maximum element of array;
// let arr1=[13,15,11,18,229,12,29];
// let max=arr1[0];
// for(let i=0;i<arr1.length;i++){
//     if(max<=arr1[i]){
//         max=arr1[i]
//     }
// }
// console.log(`the maximum element of arr1: ${max}`);

//second miximum value of arr

let arr2=[2,1,3,11,32,12,45,100,100];
// let maxx = Math.max(arr2[0] , arr2[1]);
// let secmax = Math.min(arr2[0] , arr2[1]);

// for(let i=2;i<arr2.length;i++){
//     if(arr2[i]>maxx){
//         secmax=maxx;
//         maxx=arr2[i];
//     }else if(arr2[i]>secmax && arr2[i]!=maxx){
//         secmax=arr2[i]
//     }
// }
// console.log(`the second lagest number of an array: ${secmax}`);

//reverse the array
// let arr=[10,20,30,40,50,60,70,80,90];
// console.log(`Before reversing the arr: ${arr}`);
// let i=0,j=arr.length-1;
// while(i<j){
//     [arr[i],arr[j]]=[arr[j],arr[i]];
//     i++;
//     j--;
// }
// console.log(`After reversing the array: ${arr}`);

//all zero to left side and all the ones at the right side 

let jaar=[1,0,1,0,1,0,1,1,0];
let i=0,j=0

while(i<jaar.length){
    if(jaar[i]==0){
       [ jaar[i],jaar[j]]=[jaar[j],jaar[i]];
        j++;
    }
    i++;
}
console.log(`all the zeros at left and all the ones at right side: ${jaar}`);
