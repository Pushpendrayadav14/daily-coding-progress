
let prompt=require('prompt-sync')();


//sum of digit using while loop 
let n=Number(prompt("enter the value of n: "));

let temp=0;
while(n>0){
    let rem=n%10;
    temp=rem+temp;
    n=Math.floor(n/10);
}
console.log(`the sum of all the digit of given number is ${temp}`);

//reverse the given number 
let m=Number(prompt("enter the value of m: "));
let q=m;
let revers=0;
while(m>0){
    let rem=m%10;
    revers=(revers*10)+rem;
    m=Math.floor(m/10);
}
console.log(`the reverse of ${q} is : ${revers} `);

