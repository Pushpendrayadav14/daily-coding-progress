//more topics on oops in js [class expression ,hoisting ,inheritence ,getter and setter]

//class expression
// let human = class {
//     constructor(name,age){
//         this.name=name;
//         this.age=age;

// }
// run(){
//     console.log(`${this.name} is running`);
// }
// drink(){
//     console.log(`${this.name} is drinking`);
// }
// }
// let obj1=new human("ajay",21);

//inheritence
// class person{
//     constructor(name,age){
//         this.name=name;
//         this.age=age;
//     }
//     breathe(){
//         console.log(`${this.name} is breathing`);
//     }
//     eat(){
//         console.log(`${this.name} is eating`);
//     }
// }
// class student extends person{
//     constructor(name,age,rollno){
//         this.rollno=rollno;
//         super(name,age);
// }
//    studey(){
//     console.log(`${this.name} is studying`);
//    }
// }
// let st1=new student("ajay",21,101);


//getter and setter

// class carr{
//     constructor(){
//         this.brand="Audi";
//         this._model="Q7";
//     }
//     set model(val){
//         if(val!="Q7"){
//             console.error("Invaliod model");
//             return;
            
//         }
//         this._model=val;
//     }
//     get model(){
//         return this._model;
//     }
// }
// let c=new carr();
// c.model="Q5";
// console.log(c.model);