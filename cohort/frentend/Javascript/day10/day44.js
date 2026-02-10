// let btn=document.createElement('button');
// btn.innerHTML='new button';
// btn.style.backgroundColor='red';
let main= document.querySelector('main');
// main.appendChild(btn);

let bttn=document.querySelector('button');

bttn.addEventListener('click',function(){
let div=document.createElement('div');
let c1=Math.floor(Math.random()*256);
let c2=Math.floor(Math.random()*256);
let c3=Math.floor(Math.random()*256);

let r=Math.random()*360;


div.style.height='50px';
div.style.width='50px';
let b=div.style.backgroundColor=`rgb(${c1},${c2},${c3})`;

let x=Math.random()*100;
let y=Math.random()*100;

div.style.position ='absolute';
div.style.left=x+'%';
div.style.top=y+'%';
div.style.rotate=r+'deg';

main.appendChild(div);

bttn.style.backgroundColor=b;

})