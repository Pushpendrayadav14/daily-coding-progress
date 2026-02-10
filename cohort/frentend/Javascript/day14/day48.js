let img=document.querySelector('img');
// let coment=document.querySelector('h1 span');
let body=document.body;

// img.addEventListener('mouseenter',function(){
//          coment.innerHTML='chutki se door ho ja';
//          body.style.backgroundColor='red';


// })
// img.addEventListener('mouseleave',function(){
//          coment.innerHTML='chutki se door hi rehna';
//          body.style.backgroundColor='black';


// })

// body.addEventListener('mousemove',function(els){
//     console.log(`X axis: ${els.x}`);
//     console.log(`Y axis: ${els.y}`);

// })

// body.addEventListener('keydown',function(els){
//     console.log(` you press ${els.key}`);

// })

// body.addEventListener('mousemove',function(els){
    
//     img.style.left=els.x+'px';
//     img.style.top=els.y+'px';
// });

let h1=document.querySelector('h1');

body.addEventListener('keydown',function(dets){
    h1.innerHTML=dets.code;

})
