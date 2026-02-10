

// - Introduction to Asynchrony in JavaScript.
//-js->single threaded hai 
//ek kam ek baar me ker payegi
//syncrony approach js bolte hai

//Introduction to `callbacks and Problems in Callbacks: callback=> ek esa function jo turent nhi chalega ye tab chalega jab kaam complet ho jaye 
//cb=>function mein pass kerte ho 
// function abc(fn){
//     fn(function (fn2){
//          fn2(function (){
//             console.log("kjashdkashdhsdhdashdkshdksd");
//          });
//     });
// }
// abc(function(fn){
//     fn(function (fn3){
//       fn3();
//     });

// });

function palsedetiallao(addres,cb){
    //logic
    cb({name:'pal',lastname:'yadav'});
    console.log(addres);

}
palsedetiallao("adress ldmfnm",function(detials){
    console.log(detials);

});



// - Understanding `promises` - `pending` `resolved` `rej
 //How to prevent callback hell using `async` & `await`
 // - `setInterval` & `setTimeout` in JavaScript