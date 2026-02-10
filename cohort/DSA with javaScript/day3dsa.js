//print the greatest number between two number
let prompt=require('prompt-sync')();

// let a=prompt("enter the value of a: ");
// let b=prompt('enter the value of b: ');
// if(a>b)console.log("a is grater then b");
// else console.log("b is grater then a ");

// Q 11.Accept an integer and check whether it is an even number or odd.
// let num=Number(prompt("enter an number: "));

// if(num%2==0)console.log("given number is even");
// else console.log("given number is odd ");

// Q 12.Accept name and age from the user. Check if the user is a valid voter or not.
// let name=prompt("enter your Name: ");
// let age=Number(prompt("enter your age: "));

// if(age>18)console.log(`${name} is aligible for vote`);
// else console.log(`${name} your are note aligible for vote`);

// Q 13. Accept three numbers and print the greatest among them
// let n1=Number(prompt("enter the first number:"));
// let n2=Number(prompt("enter the second number:"));
// let n3=Number(prompt("enter the third number:"));

// if(n1>n2 && n1>n3)console.log(`${n1} is greatest among 3 number`);
// else if(n2>n3 && n2>n1)console.log(`${n2} is gratst among 3 number`);
// else console.log(`${n3} is gratest among 3 numbers`);

// Q 14. Accept a year and check if it a leap year or not (google to find what's a leap year)
// let year=Number(prompt("enter the year: "));

// if(year%4==0 && year%100!=0)console.log(`the year ${year} is leap year `);
// else if(year%400==0)console.log(`yeat ${year} is an leap year`);
// else console.log(`${year} is not an leap year`);

// Q 15. Shop discount - Description on Graphic
// let amount=Number(prompt('enter the amount that customer perches: '));

// if(amount<=5000){
//     console.log(`your total amount is: ${amount} `);
// }else if(amount>5000 && amount<=7000){
//     console.log(`the totalBill amount after 5% less is:${amount - (amount*(5/100))}`);
// }else if(amount>7000 && amount<=9000){
//     console.log(`the totalBill  amount after 10% less is: ${amount - (amount*(10/100))}`);
// }else{
//     console.log(`the totalBill amount after 20% less is: ${amount - (amount*(20/100))}`);
// }

// Q 16. Bijli Bill - Description on Graphic
// let unit= Number(prompt("enter the units: "));

// if(unit>0 && unit<=100)console.log(`the total amount of unit is : ${unit*4.2}`);
// else if(unit>100 && unit<=200)console.log(`the total amount of unit is: ${(100*4.2) + (unit-100)*6 }`);
// else if(unit>200 && unit<=400)console.log(`the total amount of unit is: ${(100*4.2) + (100*6) + (unit-200)*8}`);
// else console.log(`the total amount of unit is: ${(100*4.2) + (100*6) + (200*13) + (unit-400)*13}`);

// Q 17. Counting number of days in a given month of a year
// let year=Number(prompt("enter the year: "));
// let month=Number(prompt("enter the month: "));

// if(month==2){
//     if(year%400==0 || ((year%100!=0) && year%4==0))console.log("29 days ");
//     else console.log("28 days");
// }else if(month==1 || month==3 || month==5 || month==7 || month==8 )console.log("31 days ");
// else console.log("30 days");

let x="hello";
if (x)console.log("Truthy");
else console.log("Falsy");