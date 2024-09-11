// variables

// var name = "john doe";
// name = "susan" // override lote tar
// console.log(name);

//Scope variable
// let name = "john doe"
// {
//   let age = 22;
//   console.log(name);
//   console.log(age);
// }
// console.log(age);

// const PI = 3.142;
// PI = 22;
// console.log(PI);

// Datatype

// String
// let name = "john doe"
// console.log(typeof name);

// number

// let num = 12;
// console.log(typeof num);

//boolean

// let bool = true;
// console.log(typeof bool);

// undefined

// let x ;
// console.log(x)

// null

// let emptyCup = null;
// console.log(emptyCup);

//Nan

// console.log(2 - "c");

// operator

// +,-,*,/,% // return number

// =,==,===,!=,!==,<,>,<=,>= // return true or false

// if else

// falsy
// 1 0
// 2 null
// 3 undefined
// 4 NaN
// 5 ""
// 6 false
// console.log(Boolean(0))

// if(false){
//   console.log(true);
// }else{
//   console.log(false);
// }

// let name = "john";
// if(name == "john doe"){
//   console.log("he is JD...")
// }else{
//   console.log("I don't know him...");
// }

// let name = "";
// if(name){
//   console.log("hello " + name);
// }else{
//   console.log(undefined)
// }

// AND gate
// &&

// let age = 20;

// if(age > 20 && age < 30){
//   console.log(true);
// }else{
//   console.log(false)
// }

// OR gate
// ||

// if(age > 20 || age < 20){
//   console.log(true);
// }else{
//   console.log(false);
// }

// function

// function getName(){
//   // console.log("john doe");

//   console.log("its work");
//   return "john doe";
// }
// console.log(getName());

// function expression

// let getName = function(){
//   // console.log("john doe");
//   return "john doe";
// }
// console.log(getName());

// this is the difference between normal function and function expression
// getName();
// console.log("this is console")
// console.log("this is console")
// console.log("this is console")
// console.log("this is console")
// console.log("this is console")
// console.log("this is console")
// console.log("this is console")
// function getName(){
//   console.log("john doe");
// }

// getName();
// let getName = function(){
//   console.log("johndoe");
// }

// arrow function

// let getName = (name) => {console.log(name)};

// let getName = name => {return name}



// Array

// let names = ["johndoe","mark","alice","susan"];
// console.log(names); 

// for each method (array ko bae loop pat tar)

// names.forEach(name=>console.log(name));

// filter method (return true or false)

// let filteredNames = names.filter(name=>name =="mark");

// console.log(filteredNames);

// map method

// let mappedNames = names.map(name=>`Hello ${name} how are you?`);

// console.log(mappedNames);


// Obj

// let bio = {
//   name: "johndoe",
//   age: 43,
//   hairColor: "brown",
//   isMarried : false,
//   walk(){
//     return this.name + " is walking";
//     // console.log(this);
//   },
//   getAge(){
//    return `${this.name} is ${this.age} years old...`
//   }
// }

// console.log(bio.getAge());
// console.log(bio["isMarried"]);

// constructor

// class Person{
//   constructor(name,age,gender){
//     this.name = name;
//     this.age = age;
//     this.gender = gender;
//   }
//   walk(){
//     console.log(this.name + " is walking");
//   }
//   getAge(){
//     console.log(this.name + " is " + this.age + " years old...")
//   }
//   getGender(){
//     console.log(`${this.name} is ${this.gender}`);
//   }
// }

// let user1 = new Person("johndoe",42,"male");
// console.log(user1.walk());
// console.log(user1.getAge());
// console.log(user1.getGender());


// constructor function

// function Person(name,age,hairColor){
//   this.name = name;
//   this.age = age;
//   this.hairColor = hairColor;
// }

// let person = new Person("JohnDoe",34,"brown");
// console.log(person);