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

// async example
// console.log("i am number one");
// console.log("i am number two");
// setTimeout(()=>{
//   console.log("i am number three")
// },(5000));
// console.log("i am number four");
// console.log("i am number five");

// sync function

// function sync() {
//   let result = 0;
//   for (let i = 0; i < 1000000000; i++) {
//     result += i;
//   }
//   return result;
// }

// console.log("work");
// console.log(sync());
// console.log("more important work");

// async function

// function async() {
//   return new Promise((resolve, reject) => {
//     let result = 0;
//     for (let i = 0; i < 1000000000; i++) {
//       result += i;
//     }
//     if (result) resolve(result);
//     else reject("i have an error");
//   });
// }

// console.log("work");
// async()
//   .then((success) => {
//     console.log(success);
//   })
//   .catch((error) => {
//     console.log(error);
//   });
// console.log("more important work");

// error async function

// function async() {
//   return new Promise((resolve, reject) => {
//     let result = 0;
//     for (let i = 0; i < 1000000000; i++) {
//       result += i + undefined;
//     }
//     if (result) resolve(result);
//     else reject("I have an error....");
//   });
// }

// console.log("work");
// async()
//   .then((success) => {
//     console.log(success);
//   })
//   .catch((fail) => {
//     console.log(fail);
//   });
// console.log("more important work");
// console.log("most important work");

// https://fakestoreapi.com/products/1

// let request = new XMLHttpRequest();

// request.addEventListener("readystatechange", () => {
//   // console.log(request,request.readyState)

//   if (request.readyState === 4) {
//     console.log(request.responseText);
//   }
// });

// request.open("GET", "https://fakestoreapi.com/products/");

// request.send();

// let request = new XMLHttpRequest();

// request.addEventListener("readystatechange", () => {
//   if (request.readyState === 4 && request.status === 200) {
//     console.log(request.responseText);
//   } else if (request.status === 404) {
//     console.log("this Url is unavailable");
//   }
// });

// request.open("GET", "https://fakestoreapi.com/products");
// request.send();

// console.log("i am first");

// let todos = (callback) => {
//   let request = new XMLHttpRequest();

//   request.addEventListener("readystatechange", () => {
//     if (request.readyState === 4 && request.status === 200) {
//       let datas = JSON.parse(request.responseText);
//       callback(datas, undefined);
//     } else if (request.status === 404) {
//       callback(undefined, "Something's went wrong please try again later");
//     }
//   });

//   request.open("GET", "https://fakestoreapi.com/products");
//   request.send();
// };

// todos((data,err)=>{
//   console.log(data,err);
// })

// todos((data, err) => {
//   if (data) {
//     console.log(data);
//   } else {
//     console.log(err);
//   }
// });

// let todos = (callback) => {
//   let request = new XMLHttpRequest();

//   request.addEventListener("readystatechange", () => {
//     // console.log(request.responseText);
//     if (request.readyState === 4 && request.status === 200) {
//       let datas = JSON.parse(request.responseText)
//       callback(datas, undefined);
//     } else if (request.status === 404) {
//       callback(undefined, request.status + " error");
//     }
//   });

//   request.open("GET", "http://127.0.0.1:5500/jsbasic/name.json");
//   request.send();
// };

// todos((data, error) => {
//   console.log(data, error);
// });

// todos((data,error)=>{
//   if(data){
//     console.log(data);
//   }else{
//     console.log(error);
//   }
// })

// let todos = (callback) => {
//   let request = new XMLHttpRequest();

//   request.addEventListener("readystatechange", () => {
//     if (request.readyState === 4 && request.status === 200) {
//       let datas = JSON.parse(request.responseText);
//       callback(datas, undefined);
//     } else if (request.status === 404) {
//       callback(undefined, request.status + " error please check your Url");
//     }
//   });

//   request.open("GET", "./jsbasic/name.json");
//   request.send();
// };

// todos((data, error) => {
//   if (data) {
//     console.log(data);
//   } else {
//     console.log(error);
//   }
// });
