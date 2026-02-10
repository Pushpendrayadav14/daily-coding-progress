//sync and async 
console.log("script start");


// setTimeout(function(){
//     console.log("setTimeout");
// },3000);

// function kuchdersechalunga(fn){
//     setTimeout(fn,Math.floor(Math.random()*10)*1000);
// }
//ye call back function hai:aisa function jo dusre function ko argument ke roop me pass kiya jata hai
// kuchdersechalunga(function(){
//     console.log("kuchder se chalunga");
// });

//promise based approch

// let p=new Promise(function(resolve,reject){
//     setTimeout(function(){
//         let rn=Math.floor(Math.random()*100)
//         if(rn%2==0){
//             resolve("success "+rn);

//         }else{
//             reject("failure "+rn);
//         }

//     },3000)
// })

//then/catch/finally
// p.then(function(data){
//     console.log("then "+data);
// }).catch(function(err){
//     console.log("catch "+err);
// });

//async try catch  await
// async function asyncfn(){
//     try{
//         let data=await p;
//         console.log("async fn then "+data);
//     }
//     catch(err){
//         console.log("async fn catch "+err);
//     }
// }
// asyncfn();


//API call
// fetch('https://randomuser.me/api/?results=5000')
// .then((rawdata)=>{
//     return rawdata.json();
// })
// .then((data)=>{
//     console.log(`Name: ${data.results[0].name.title} ${data.results[0].name.first} ${data.results[0].name.last}`);
//     console.log(`Gender: ${data.results[0].gender}`);
//     console.log(`DOB: ${data.results[0].dob.date}`);
//     console.log(`email: ${data.results[0].email}`);
// })
// .catch((err)=>{
//     console.log("error ",err);
// });

// API Project

