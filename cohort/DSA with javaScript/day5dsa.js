let prompt=require('prompt-sync')();
// let p=Number(prompt("enter the intiger number: "));
// for(i=1;i<=p;i++){
//     // console.log('Hello Pushpendra!!!!!!');
//     console.log(i);

// }
// let n=Number(prompt("enter the intiger number: "));
// for(let i=n;i>=1;i--){
//     // console.log('Hello Pushpendra!!!!!!');
//     console.log(i);

// }
// let n=Number(prompt("enter the intiger number: "));
// for(let i=1;i<=10;i++){
//     // console.log('Hello Pushpendra!!!!!!');
//     console.log(`the table of ${n} * ${i} = ${n*i}`);

// }

//sum up to n term 
// let n=Number(prompt("enter the intiger number: "));
// let temp=0;
// for(let i=1;i<=n;i++){
//     temp=temp+i;
// }
// console.log(`the sum of of numbers up to n number is : ${temp}`);


//factorial of number
// let n=Number(prompt("enter the intiger number:"));
// function factorial(n){
//     if(n===0 || n===1){
//         return 1;
//     }

//    return n*factorial(n-1); 
// }

// console.log(`the factorial of given number ${n} is: ${factorial(n)}`);

//print the sum of even and odd number seprately in the given range
// let a=Number(prompt("enter the value of a: "));
// let b=Number(prompt("enter the value of b: "));

// if(a>b){
//     [a,b]=[b,a];
// }
// let sumEven=0,sumOdd=0;
// for(let i=a;i<=b;i++){
//     if(i%2==0){
//         sumEven=sumEven+i;
//     }else{
//         sumOdd=sumOdd+i;
//     }
   
// }
// console.log(`the sum of Even number in the range of ${a} to ${b} is: ${sumEven}`);
// console.log(`the sum of Odd number in the range of ${a} to ${b} is: ${sumOdd}`);


//find the numbers of facters of given number
// let n=Number(prompt("enter the intiger number:"));
// for(let i=1;i<=n;i++){
//     // if(n%i==0){
//     //     // console.log(i+ " ");
//     // }
//     if(n%i==0)process.stdout.write(i+" ");
    
// }
// let n=Number(prompt("enter the intiger number:"));
// for(let i=1;i<=n/2;i++){
//     // if(n%i==0){
//     //     // console.log(i+ " ");
//     // }
//     if(n%i==0)process.stdout.write(i+" ");
    
// }
// console.log(n);

let i=5;
while(i){
    console.log(i);
    i--;
}