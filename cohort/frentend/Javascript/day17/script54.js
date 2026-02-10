// class smosha{

//default value set kerna 

//     constructor(name,price,quentity){
//         this.name=name;
//         this.price=price;
//         this.quentity=quentity;
//         this.totalprice=this.price*this.quentity;
//     }
//     packing(){
//         console.log(`${this.name} is packed in a polythene bag`);
//     }
//     unpacking(){
//         console.log(`${this.name} is unpacked from the polythene bag`);
//     }
// }
// const Smosha1 = new smosha("alusmosha",50,1);
// const Smosha2 = new smosha("dalkasmosha",50,5);
// const Smosha3 = new smosha("bhotekasmosha",50,3);
// console.log(Smosha1);
// console.log(Smosha2);
// console.log(Smosha3);



// class books{
//     constructor(name,price,quentity){
//         this.name=name;
//         this.price=price;
//         this.quentity=quentity;
//         this.totalprice=this.price*this.quentity;
//     }
// }
// books.prototype.packing=function(){
//         console.log(`${this.name} is packed in a polythene bag`);
//     }
// books.prototype.unpacking=function(){
//         console.log(`${this.name} is unpacked from the polythene bag`);
//     }
// const book1 = new books("math",200,1);
// console.log(book1);
// const book2 = new books("science",300,2);
// console.log(book2);    
// const book3 = new books("history",150,4);
// console.log(book3);



//this ki value 

// //global=>window
// console.log(this);

// //function=> window
// let a=function(){
//     console.log(this);
// }
// a();

// //ES5 inside obeject => object 
// let obj={
//     name:"harshit",
//     getname:function(){
//         console.log(this);
//     }
// }
// obj.getname();

// //ES6 inside obeject => window
// let obj2={
//     name:"pal",
//     getname:()=>{
//         console.log(this);
//     }
// }
// obj2.getname();

// //ES5 inside ES5 function inside object => window 
// let obj3={
//     name:"pallavi",
//     getname:function(){
//         function a(){
//             console.log(`ES5 inside ES5 function inside object ${this}`);
//         }
//         a();
//     }
// } 
// obj3.getname();

// //ES6 inside ES6 function inside object => object
// let obj4={
//     name:"pushpaa",
//     getname:function(){
//         let a=()=>{
//             console.log(`ES6 inside ES6 function inside object ${this}`);
//         }
//         a();
//     }
// } 
// obj4.getname();



// call apply bind 
//ek fuction mein this ki value window hoti hai ager aap chahte ho ki vo value window na hoker koi or object ho tab aap call apply bind ka use kare 

let obj5={
    name:"pushpendra",
    getname:function(age,city){
        console.log(`name is ${this.name} age is ${age} city is ${city}`);
    }
}
function b(a,b,c,d){
    console.log(this,a,b,c,d);
}
b.call(obj5,1,2,3,4)
b.apply(obj5,[1,2,3,4])
let cb=b.bind(obj5,1,2,3,4)
cb();