let prompt=require('prompt-sync')();

// //ISBN VALIDATION
// let isbn =Number(prompt("enter the isbn number: "));
// let sum=0;
// while(isbn>0){
//     let count=13;
//     let rem=isbn%10;
//     sum=sum+(rem*count);
//     count--;
//     isbn=Math.floor(isbn/10);

// }
// console.log(sum%10?"valid ISBN number ":"invalid ISBN number");

//do while loop
// do{
//     console.log("hello world");
// }while(false);

// let n;
// do{
//     n=Number(prompt("enter a number less than 100: "));

// }while(n==1);

// let computer = Math.floor(Math.random()*100+1);
// let gusse;
// do{
//     gusse=Number(prompt("enter a number between 1 to 100: "));
//     if(gusse>computer){
//         console.log("your gusse is high");
//     }else if(gusse<computer){
//         console.log("your gusse is low");
//     }else if(gusse==computer){
//         console.log("congratulation! you gusse the correct number");
//     }else{
//         console.log("invalid input");
//     }
// }while(gusse!=computer);

let n;
do{
    n=Number(prompt("enter a number  1 for addition & 2 for subtraction: "));
    switch(n){
        case 1:{
            let a=Number(prompt("enter the value of a: "));
            let b=Number(prompt("enter the value of b: "));
            console.log(`the addition of ${a} and ${b} is : ${a+b}`);
            break;}

        case 2:{ 
            let c=Number(prompt("enter the value of c: "));
            let d=Number(prompt("enter the value of d: "));
            console.log(`the addition of ${c} and ${d} is : ${c-d}`);
            break;}
        
        default:
            console.log("invalid input");

    }

    n=prompt("do you want to continue program : ");
}while(n==10);
