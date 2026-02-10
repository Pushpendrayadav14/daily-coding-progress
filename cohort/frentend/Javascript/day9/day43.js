// let a=Math.random()*100;
// let b=Math.floor(a);
// console.log(b);

// let bx=document.querySelector('#box');
// let btn=document.querySelector('button');

// btn.addEventListener('click',function(){
//     let c1=Math.floor(Math.random()*256);
//     let c2=Math.floor(Math.random()*256);
//     let c3=Math.floor(Math.random()*256);
//     bx.style.backgroundColor=`rgb(${c1},${c2},${c3})`;

// });

// let arr=['apple','banana','grapes','mango','orange','peach','pineapple','strawberry','watermelon'];
// console.log(arr[Math.floor(Math.random()*arr.length)]);

let arr=[{
    team:'CSK',
    primeryColor:'yellow',
    secondaryColor:'blue'
},
{
    team:'MI',
    primeryColor:'blue',
    secondaryColor:'gold'
},
{
    team:'RCB',
    priymeryColor:'red',
    secondaryColor:'black'
},
{
    team:'KKR',
    primeryColor:'purple',
    secondaryColor:'gold'
},
{
    team:'SRH',
    primeryColor:'orange',
    secondaryColor:'red'
},
{
    team:'DC',
    primeryColor:'blue',
    secondaryColor:'yellow'
},
{
    team:'RR',
    primeryColor:'blue',
    secondaryColor:'orange'
}];

let bx=document.querySelector('#box');
let btn=document.querySelector('button');
let main=document.querySelector('body');
let h1=document.querySelector('h1')

btn.addEventListener('click',function(){
    let winner=arr[Math.floor(Math.random()*arr.length)];
    h1.innerHTML=winner.team;
    bx.style.backgroundColor=winner.primeryColor;
    main.style.backgroundColor=winner.secondaryColor;
});