let btn=document.querySelector('button');

let h1=document.querySelector('h1');
let inner=document.querySelector('#inner');

let count=0;

btn.addEventListener("click", ()=>{
    btn.style.pointerEvents='none';
    let num=50+Math.floor(Math.random()*50);
    console.log(num);
    let int=setInterval(function(){
        count++;
    h1.innerHTML=count+"%";
    inner.style.width=count+"%";
    },num);

    setTimeout(()=>{
     clearInterval(int);
     btn.innerHTML='Downloaded';
     btn.style.opacity=0.6;
    },num*100);

    console.log(`Downloaded in ${num/10} Sec`);
});