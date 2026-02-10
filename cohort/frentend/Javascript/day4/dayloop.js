// ### loops & Conditionals in Javascript

// - Understanding Condition Operator in Javascript - [`if` , `else` , `if-else` , `else-if` , `Ternary Operator` , `switch` ]
//user password :- if mach log in else not sign in
//if-else
// let password ="pal@123";
// if(password=== "pal@123"){
//     console.log("Login account");
// }else{
//     console.log("login failed!!!");
// }

//else-if 
// let marks=Number(prompt("enter yoyr marks 0 to 100"));
// if(marks>=90){
//     console.log("A grade");
// }else if(marks>=75 && marks<90){
//     console.log("B grade");

// }else{
//     console.log("C grade");
// }

//truthy and falsy :-0 "" false NaN undefine document.all (false) , others all are true 
// if(1){
//     console.log("Truthy value:");
// }
//condition ? true : false )(ternary operater)
// 12>13 ? console.log("hello"):console.log("by by ");

// let age=Number(prompt("enter your Age:"));
// let result=age>=18?"Vote":"note ailigible for vote";
// console.log(result);

//Switcht 
// let day =Number(prompt("enter your number between 1-7:"));
// switch(day){
//     case 1: console.log("Monday");break;
//     case 2: console.log("tuesday");break;
//     case 3: console.log("Wednesday");break;
//     case 4:  console.log("thurestday");break;
//     case 5: console.log("friday");break;
//     case 6: console.log("saturday");break;
//     case 7: console.log("sunday");break;
// }
//loops :-repeat kerna 
//straightforword loop-> naa hi value badalty hai  na hi printing badalty hai 
//dynamic loop-> value badal sakti hai and printing bhi badalti hai 

// - `for`  and foreach Loop in JavaScript
//for loop 
// for(startTransition;end;change){

// }
// for(let i=1 ;i<6;i++){
//     console.log(i+"pal");
// }



// - `while` Loop in JavaScript
// let i=0;
// while(i<5){
//     console.log("hello"+i);
//     i++;
// }

// // - `do...while` in JavaScript
//pehle run hota hai fir condition check kerta hai 
// let i=1;
// do{
//     console.log(i);
//     i++;
// }while(i<=5);
// console.log(`after itration completed in do while loop value of i is : ${i}`);


// - `forEach` in JavaScript()(only for the arrays)
// let numbers=[1,2,3,4,5,6,7,8];
// numbers.forEach(item=>console.log(item));

// - `for in` Loop in JavaScript(objects ke keys ke liye hota hai)
// let user={name:"pal",age:21,email:"snhfkb@gmail.mmmm"}
// for(let key in user){
//     console.log(key,user[key]);
// }

// - `for of` Loop in JavaScript()(used for array and string)
// let num=[1,2,3,4,6,7,0];
// for(let n of num){
//     console.log(n);
// }

// - Recursion in JavaScript(Function apne aap ko call kare = recursion)
//recursion
// function count(n){
//     if(n===0)return;
//     console.log(n);
//     count(n-1);
// }

// count(5);
// - Loop control statements - [ `break` , `continue` ]
// for(let i=1;i<=10;i++){
//     if(i===5){
//         break;
//     }
//     console.log(i);
// }
// for(let i=1;i<=10;i++){
//     if(i===5 || i===8){
//         continue;
//     }
//     console.log(i);
// }


//!!!!!!!!!!!!!!!!!!!!Practise Questions !!!!!!!!!!!!!!!!!!!!!!//
// 3. Conditional Operators (if, else, else-if, ternary, switch)

// a. Take input using prompt for age.
// If age 18 log "Adult". Else log "Minor".
// let age=Number(prompt("enter your age:"));
// if(age>=18){
//     console.log("Adult");
// }else{
//     console.log("Minore");
// }

// let age=Number(prompt("enter your age:"));
// let result=age>=18 ?"Adult":"Minore";
// console.log(result);

// b. Write a program:

// If marks >= 90 → "A grade"

// Else if marks >= 75 → "B grade"

// Else if marks >= 50 → "C grade"

// Else → "Fail"

// let marks=Number(prompt("enter your marks:"));
// if(marks>=90){
//     console.log("A Grade");
// }else if(marks>=75){
//     console.log("B Grade");
// }else if(marks>=50){
//     console.log("C Grade");
// }else{
//     console.log("Fail");
// }

// c. Create a variable city = "Bhopal".

// If city is "Bhopal" → log "MP" Else if city is "Delhi" log "Capital"

// Else log "Unknown City"

// let city=prompt("gusse i am from which city??:");
// if(city==="indore"){
//     console.log("MP");
// }else if(city==="delhi"){
//     console.log("capital");
// }else{
//     console.log("unknown city");
// }


// d. Use ternary operator:
// Let score = 40. If score > 35 → "Pass" else "Fail" using a ternary.

// let score=40;
// let result= score>35?"pass":"fail";
// console.log(result);

// e. Convert this if-else into a ternary: if (temperature > 30) { "Hot" } else { "Pleasant" }
// let temperature=Number(prompt("enter the Temprature Less than 50:"))
// let result=temperature>30?`${temperature} degree c is Hot `:`${temperature} degree c is pleseant`;
// console.log(result);

// f. Write a switch case:

// Take day number (1 to 7).

// Print the day name.

// Default case: "Invalid Day".
// let day=Number(prompt("enter the number between 1 to 7:"));

// switch(day){
//     case 1: console.log("Monday");break;
       
//     case 2: console.log("Tuesday");break;
//     case 3: console.log("Wednesday");break;
//     case 4: console.log("thursday");break;
//     case 5: console.log("Friday");break;
//     case 6: console.log("saturday");break;
//     case 7: console.log("Sunday");break;
//     default:console.log("Invalid Day");
// }

// g. Using logical operators in condition:
// If age > 18 and country == "India" → log "Eligible for Vote"
// Else → "Not Eligible"
// let age=Number(prompt("enter your age"));
// let country=prompt("enter your contry name");
// if(age>=18 && country==="india"){
//     console.log("Eligible for Vote");
// }else if(age<18 || country==="india"){
//     console.log("you are from india but you are minnor so you are not aligibl");
// }else if(age>=18 || country!=="india"){
//     console.log("not eligible because you are not citizen of india");
// }else{
//     console.log("not eligible");
// }

// Level 1 – Pure Beginner Practice

// 7. Ask user’s age and check if eligible to vote
// If age >= 18 → “Eligible”, else → “Not eligible”
// let age=Number(prompt("enter your age"));
// let result=age>=18?"Eligible":"Not Eligible";
// console.log(result);

// 8. Print multiplication table of 5
// Use loop to print 5 × 1 to 5 × 10.
// let table=Number(prompt("enter the number that you want table:"))
// console.log(`Table of ${table}`)
// for(let i=1;i<=10;i++){
//     console.log(`${table} * ${i} = ${table*i} `);
// }

// 9. Count how many numbers between 1 and 15 are greater than 8
// Loop and count conditionally.
// let count=0;
// for(let i=1;i<=15;i++){
//     if(i>8){
//         count+=1;
//     }
// }
// console.log(`ther are ${count} number between 1 to 15 which are greter then 8`);


// 10. Ask user for password and print access status
// Hardcoded correct password. Compare with user input.
// let inputPassword=prompt("enter your password:");
// let password="palyadav@123";
// if(inputPassword===password){
//     console.log("access account ");
// }else{
//     console.log("Note Access account");
// }

// Level 2 – Slightly Tougher but Logical
// 11. Allow only 3 attempts to enter correct password
// If user gets it right early, stop. If not → “Account locked”
// let password="pal@123";
// let inputPassword;
// for(let i=1;i<=3;i++){
//       inputPassword=prompt(`its your ${i}st chance to enter correct password  `);
//     if(inputPassword===password){
//         console.log("you access account");
//         break;
//     }
//    console.log("you enter wrong password try again");
// }
// if(inputPassword!==password){
//     console.log("Account locked");
// }

// 12. Ask user for words until they type “stop”. Count how many times they typed “yes”
// Loop until "stop" is typed. Count "yes".
//  let word;
//  let count=0;
//  while(true){
//     word=prompt("enter the word");
//     if(word==="yes"){
//         count++;
//     }
//     if(word==="stop"){
//         break;
//     }
//  }
//  console.log(`ther are ${count} times yes inter by user`);
 


// 13. Print numbers divisible by 7 from 1 to 50
// Use modulo % and loop.

// let count=0;
// for(let i=1;i<=50;i++){
//     if((i%7)===0){
//         console.log(`${i} is divisible by 7`);
//         count++;
//     }
// }
// console.log(`there are ${count} number which are divisible by 7 between 1 to 50`);

// 14. Sum of all odd numbers from 1 to 30
// Add only odd numbers. Print final sum.
// let sum=0;
// for(let i=1;i<=30;i++){
//     if((i%2)===1){
//         sum+=i;
//     }
// }
// console.log(`the sum of all the odd number between 1 to 30 is ${sum}`);

// 15. Keep asking number until user enters an even number
// Use while loop. Stop only if input is even.

// let num;
// while(1){
//     num=Number(prompt("enter the number"));
//     if((num%2)===0){
//         break;
//     }
// }


// 16. Print numbers between two user inputs
// Input start and end using prompt() → print all between.

// let start=Number(prompt("enter the starting number"));
// let end=Number(prompt("enter the ending number"));
// for(let i=start+1;i<end;i++){
//     console.log(i);
// }

// 17. Print only first 3 odd numbers from 1 to 20
// Use loop. Stop with break after 3 odd prints.
// let count=0;
// for(let i=1;i<=20;i++){
//     if((i%2)===1){
//             console.log(i);
//             count++;
//         if(count===3){
//             break;
//         }
//     }
// }
    


// 18. Ask user 5 numbers. Count how many are positive
// Use loop + condition + counter.
// let count=0;
// for(let i=1;i<=5;i++){
//    let num=Number(prompt(`enter the ${i}st number`));
//    if(num>=0){
//     count++;
//    }
// }
// console.log(`ther are ${count} positive numbers gen while inserting number for 5 times `);


// 19. ATM Simulator – Allow 3 withdrawals
// Start with ₹1000 balance. Ask withdrawal amount 3 times.
// If enough balance → deduct
// Else → print “Insufficient balance”
let totalAmount=1000;
let withdrawal
for(let i=1;i<=3;i++){
    withdrawal=Number(prompt("Enter the amount you want to withdraw"));
    totalAmount-=withdrawal;
    
    if(totalAmount===0){
        console.log("Insufficient balance");
        break;
    }
}
console.log(`${totalAmount} rupees remening in your account`);

