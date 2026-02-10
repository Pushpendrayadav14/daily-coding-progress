//arthmatic operater 
//arthmatic operater 
//+ - * / %  ** 
// console.log(10+10);
// console.log(10-10);
// console.log(10*10);
// console.log(10/10);
// console.log(10%10);
// console.log(10**2);

//assihnment operater 
//= += -= *= /= %= **=
// let a=5;
// console.log(a);//5
// let b=(a+=3);
// console.log(b);//8 a=a+3
// let c=(a-=5);
// console.log(c);//0 a=a-5
// let d=(a*=5);
// console.log(d);//25 a=a*5
// let e=(a/=5);
// console.log(e);//1 a=a/5
// let f=(a%=5);
// console.log(f);//0 a=a%5
// let g=(a**=5);
// console.log(g);//25 a=apower5

//comparision operater
//== === !=(NEVER USE THIS ) !== > < >= <=
//== never use this 
// console.log("pal"=="pal");
// console.log(3==="3");
// console.log(3!=="3");
// console.log(5>3);
// console.log(5<4);
// console.log(5>=5);
// console.log(3<=3);

//logical operater
//&& || ! 
// console.log(3===3 && 10>5);
// console.log(3===3 || 10<5);
// console.log(!(5>3));

//temprart operater 
//condition ? dothis(t): dothat(f) 
// let age=20;
// let message=age>18?"Aligible":"Not Aligible";
// console.log(message);

//string operation 
// console.log("pal "+"yadav");
// //spread and rest operation 
// //spread
// let arr=[1,2,3,4,5];
// let copy=[...arr];
// console.log(copy);
// //rest 
// function sum(...numbers){
//     return numbers.reduce((a,b)=>a+b);

// }
// console.log(sum(8,5,4));

// //Nullish Coalescing operater(??)
// let name=null;
// let displayname=name??"guest";
// console.log(displayname);
// //optional chaining(?.)
// let user={profail:{name:"rakhi"}};
// console.log(user?.profail?.name);
// console.log(user?.profail?.age);

//hoisting
// console.log(a);//undefine
// var a="num";

//hoisting in functions
// sayhello();
// function sayhello(){
//     console.log("Hello Everyone");
// };


//type checking operater  
//typeof  /
// ~~~~instanceof:kuch bhi bnao ge vo uska type check kr skte ho

//string operater 
//+ (for concatenation)

//spread / rest operter 
// ...(very important in moder js)

//nullish coalesing operater 
// ?? (fallback only to nested null /undefined)

//optional chaining operater 
// ?. (safe access to nested object property)



//******************Practice ker rha hu khud se***********************//

//promt ,console ,alert 
// console.log("hello man my name is Pushpa");
// alert("dont call my name bro ");
// let name=prompt("enter your namen bro:")

// console.log(`hello ${name}bro welcome to js world`);//this is called template literal

//string and some methods 
//"
// let str="hello my name is pushpendra and well come to the javascript world";
// // console.log(str.slice(5,27));
// console.log(str.split(""));

// // let fruits="apple , banana , mango , orange";
// // let rst = fruits.split(",");
// // console.log(typeof(rst));
// console.log(str.replace("pushpendra","pushpa"));
// console.log(str.toUpperCase());
// console.log(str.toLowerCase());
// console.log(str.includes("yoyoyoyo"));//it checks word is present on the given string or not
// console.log(str.indexOf("pushpendra"));//it gives the index of the given word

//console mathods in javascript 
//log , error ,warn ,info,table ,group ,groupEnd ,clear ,time ,timeEnd
// console.log("hello bro this is pushpa");
// console.error("this is an error bro");
// console.warn("this is a warning bro");
// console.info("this is some info bro");
// let user ={
//     name:"pushpa",
//     age:22,
//     company:"google"
// }
// console.table(user);

// console.group("yoyoyo group");
// console.log("my name is pushpa");
// console.log(" i am the group leader");
// console.log("group motto is to learn js");
// console.groupEnd();

// console.time("yoyoyo time");
// for(let i=0;i<100000;i++){};
// console.timeEnd("yoyoyo time");

// console.clear();

//statements and expressions 

// let a=10;
// if(a>5){
//     console.log("a is greater than 5");//this all part is called statement 
// }

// a=a+5;//this part is called expression


//javascript data tyeps
//primitive data types : number , string , boolean , null , undefined , symbol , bigint(it is immutable data type),(stored by value)
//non-primitive data types : object , array , function(stored by reference)

//comments in javascript 
//single line comment
/* multi line comment
this is multi line comment
*/

//number and floats both are of samr type number in javascript 
// let num=10;
// let floatnum=10.5;
// console.log(`number:${num} , float number:${floatnum}`);

// //string 
// let str="hello";
// console.log(`string : ${str}`);//this represents using '' or "" or ``(backtick)
// //boolean
// let baba=true;
// let notbaba=false;
// console.log(baba && notbaba);

// //null
// let empty =null;
// console.log(`null value : ${empty}`);//null represents no value

// //undefined
// let und;
// console.log(und);
// //array
// let fruits=["apple","banan","mango"];
// console.log(fruits);
// //obrjects 
// let student={
//     name:"rahul",
//     id:"en12cs304345",
//     contect:966910000


// };
// console.log(student);
// //symbole
// let id1=Symbol("id");
// let id2=Symbol("id");
// console.log(id1===id2);

// //NaN not a number 
// console.log(0/0);
// //infinity and -infinity
// console.log(1/0);
// console.log(-1/0);
// //array
// let arr1=[1,2,3,4,5];
// let arr2=arr1;

// arr2.push(8);
// console.log(arr1);
// console.log("conected");
// var a="pushpa";
// let b="pal";
// const c="pushpendra";
// var a="updated";
// let b="updated ";
// const c="updated ";

// {
//     let a="yoyoyo";
// }
// console.log(a);

// console.log("pushpa");
// console.log(22);
// console.log("indore");
// console.info("pushpa");
// console.info(22);
// console.info("indore");
// console.warn("pushpa");
// console.warn(22);
// console.warn("indore");

// let name=prompt("enter your name: ");
// alert(`well come Mr ${name}`);

// console.log(typeof(name));

// let age = Number(prompt("enter your age: "));
// console.log(typeof(age));
// console.log(age+5);

// let msg="i love myself";
// // console.log(msg.slice(2,6));
// console.log(msg.split(" "));
// console.log(msg.replace("myself","to learn ai"));
// if(msg.includes("love")){
//     console.log("yes it is found");
// };
// console.log("yoyo")
// console.log("memem")
// console.log("oyhhhhhh")
// let y=(5+5)*5;
// console.log(y);
// let age =25;
// let name="pushpendra";
// let isStudent=true;
// let skill=["html","css","scss","javascript","react","node js ","express","mongodb"];
// let user={city:"indore"};
// let x=null;
// let y;
// let z = Symbol("id");
// console.log(typeof(name));
// console.log(typeof(age));
// console.log(typeof(isStudent));
// console.log(typeof(skill));
// console.log(typeof(user));
// console.log(typeof(x));
// console.log(typeof(y));
// console.log(typeof(z));
// console.log(age+name);

// let x=5;
// let y=x;
// y=10;
// console.log(x,y);
// let obj={name:"pushpa"};
// let obj1=obj;
// obj1.name="pal";
// console.log(obj.name);

// let a=10;
// let b=3;
// console.log(a+b);
// console.log(a-b);
// console.log(a*b);
// console.log(a/b);
// console.log(a%b);

// let x = 5;
// console.log(x+=3);
// console.log(x-=3);
// console.log(x*=3);
// console.log(x/=3);
// x++;
// console.log(x);

// console.log(5=="5");
// console.log(5==="5");
// if(10>5 && 10<20 && 10===10 ){
//     console.log("yes");
// }
// console.log(true && false);
// console.log(true||false);
// console.log(!true);

// console.log(5&1);
// console.log(5|1);
// console.log(a);
// var a=10;
// console.log(b);
// let b=12;

// test();
// function test(){
//     console.log("hello");
// }

// hello();
// var hello=function(){
//     console.log("Hi");
// }
// console.log(hello);