let img=document.querySelector('#img');
let i=document.querySelector('i');

img.addEventListener("dblclick",function(){
    i.style.opacity=0.9;
    i.style.transform='translate(-50%,-50%) scale(1) rotate(0)';

    setTimeout(function(){
        i.style.transform='translate(-50%,-300%) scale(1) rotate(60deg)';
    },600);
    setTimeout(function(){
        i.style.opacity=0;
    },900);
     setTimeout(function(){
        i.style.transform='translate(-50%,-300%) scale(0) rotate(60deg)';
    },1100);
})