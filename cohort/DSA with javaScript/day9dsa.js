//patter questions class 
let prompt=require("prompt-sync")();
let n=Number(prompt("enter the number of rows: "));
// let letter=prompt("enter the letter to be printed: ");

// let copy=n;
// let ans=0;
// while(n>0){
//     let dig=n%10;
//     let fact=1;
//     for(let i=1;i<=dig;i++){
//         fact= fact*i;
//     }
//     ans=ans+fact;
//     n=Math.floor(n/10);

// }
// if(ans==copy) console.log("strong number");
// else console.log("not an stong number");

// for(let i=0;i<n;i++){
//     for(let j=0;j<n;j++){
//         process.stdout.write("*");
//     }
//     console.log();
// }

//Q 1
// *
// **
// ***
// ****
// *****

// for(let i=0;i<n;i++){
//     for(let j=0;j<=i;j++){
//         process.stdout.write("*");

//     }
//     console.log();
// }

//Q2
// 1
// 12
// 123
// 1234
// 12345

// for(let i=65;i<=letter.charCodeAt(0);i++){
//     for(let j=65;j<=i;j++){
//         process.stdout.write(String.fromCharCode(j) +'');
//     }
//     console.log();
// }

// * * * * * 
// * * * * 
// * * * 
// * * 
// * 

// for(let i=1;i<=n;i++){
//     for(let j=1;j<=n-i+1;j++){
//         process.stdout.write("* ");
//     }
//     console.log();
// }

// for(let i=1;i<=n;i++){
//     for(let j=n;j>=i;j--){
//         process.stdout.write("*  ");
//     }
//     console.log();
// }

// for(let i=1;i<=n;i++){
//     for(let j=1;j<=n-i;j++){
//         process.stdout.write(" ");

//     }
//     for(let k=1;k<=i;k++){
//         process.stdout.write("*");
//     }
//     console.log();
// }
// *   *
//  * *
//   *
//  * * 
// *   * 

// for(let i=1;i<=n;i++){
//     for(let j=1;j<=n;j++){
//         if(i==j || i+j==n+1){
//             process.stdout.write("*");
//         }else{
//             process.stdout.write(" ");
//         }
//     }
//     console.log();
// }

// *       *
//  *     *
//   *   *
//    * *
//     * 

for(let i=1;i<=n;i++){
    for(let j=1;j<=(2*n-1);j++){
        if(j==i || j==2*n-i){
            process.stdout.write("*");
        }else{
            process.stdout.write(" ");
        }
    }
        console.log();
}