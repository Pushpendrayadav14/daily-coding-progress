let h2=document.querySelector("h2");
let btn1=document.querySelector("#decrease");
let btn2=document.querySelector("#increase");
let btn3=document.querySelector("#reset");
let count=0;

btn1.addEventListener("click",function(){
    count--;
    h2.innerHTML=count;
    if(count<0){
        h2.style.color="red";
    }

});
btn2.addEventListener("click",function(){
    count++;
    h2.innerHTML=count;
    if(count>0){
        h2.style.color="green";
    }
});
btn3.addEventListener("click",function(){
    count=0;
    h2.innerHTML=count;
    if(count===0){
        h2.style.color="blue";
    }
});
