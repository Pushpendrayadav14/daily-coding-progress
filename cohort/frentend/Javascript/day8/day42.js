//DOM: Document object Model
//frontend ki js 
//DOM 4 pilllars
//=selection of element 
   //=querySelector
   //=getElementById
   //=querySelectorAll
//=changing html
    //=innerHTML
    //=textContent
//=changing css
//=event listener 

let h1= document.querySelector('h1');
h1.innerHTML="MAI BABA TILOOO";
h1.style.color="red";

let box=document.querySelector('#box');
let button=document.querySelector('button');
// box.innerHTML='<p>This is a box</p>'; 
// box.style.backgroundColor="blue";  
button.addEventListener('click',function(){
    box.style.backgroundColor='green';
    box.innerHTML='<h2>Box clicked</h2>';
    box.style.color="white";
    h1.style.color="green";

});
