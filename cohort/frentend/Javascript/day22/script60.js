//promises 
//async await
// async function abc(){
//     let rawdata = await fetch('https://randomuser.me/api/');
//     let data = await rawdata.json();
//     console.log(`${data.results[0].name.title}. ${data.results[0].name.first} ${data.results[0].name.last} `);

// }
// abc();

function getnum(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            let num=Math.floor(Math.random()*10);
            if (num<5){
                resolve(true);
            }else{
                reject(false);
            }

        },3000)
        
    })
}
async function abcde(){
    let vv=await getnum();
    console.log(vv);
}
abcde();
// setTimeout,setInterval