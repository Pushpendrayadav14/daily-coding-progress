//debouncing 

// let debounceTimer;

// function handleSearch(query) {
//     console.log("Searching for:", query);
//     // yahan API call ya filter logic aayega
// }

// document.getElementById("search").addEventListener("input", function (e) {
//     const value = e.target.value;

//     clearTimeout(debounceTimer);

//     debounceTimer = setTimeout(() => {
//         handleSearch(value);
//     }, 500); // debounce delay
// });


//throttling
// function throttling(fn,delay){
//     let last=0;
//     return function (){
//         const now=Date.now();
//         if(now-last >=delay){
//             last=now;
//             fn();
//         }
//     };
// }
// window.addEventListener("mousemove",throttling(function (){
//     console.log("pushpa");
// },2000)
// );

//json stringify
console.log(JSON.stringify({name:"pal",id:234567,Collage:"medicaps",rollno:"EN22CS301773"}));
//json parse=>json se object bnate ho 
