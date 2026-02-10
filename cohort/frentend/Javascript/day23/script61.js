//errrors in javascrript
//syntax error:
// let a=10;
// leat b=5;
// console.log(a);
// runtime error
// function abc(){
//     let a=10;
//     console.log(a.name.first);
// }
// abc();

//logical error 
// function add(a,b){
//     return a-b;
// }
// console.log(add(1,5));

//understanding the error objects(message error ,name error , stack error)

// try{
//     let a=10;
//     console.log(a.name.first);
// }catch (err){
//     console.error(err.stack);
// }

//handling exseptional use of error handling try-catch , try-catch-finally
// try{
//     let a=10;
//     console.log(a.name.first);
// }catch (err){
//     console.error(err.stack);
// }finally{
//     console.log("yoyoyoy");
// }

//how to throw error in javascript
try{
    let a=10;
    console.log(a.name.first);
}catch (err){
    console.error( new Error("Something went wrong from our side please wat for minutes......"));
    
}
//error handling in asyncronus in js 
