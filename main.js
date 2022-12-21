"use strict";
//Unions and literals//
// let myAge: string | number;
// myAge = 16  //narrowing 
// console.log(myAge);
// myAge = "Dont know";  //narrowing
// console.log(myAge.toUpperCase());
//------------------------------------//
//type-guard//
//method-1//
// let newAge = Math.random() > 0.4 ? "rajpoot" : 17;
// if(newAge === "rajpoot"){
//     //type of newAge: string
//     newAge.toUpperCase();  //can be called
// }
// else{
//     newAge.toLocaleString();
// }
//------------------------------------//
//type-guard//
//method-2//
// typeof newAge === "string"
//     ? newAge.toUpperCase()  //Ok:string
//     : newAge.toFixed();     //Ok:numbers
//------------------------------------//
//literals-type//
// let age: number | "died" | "unkown";
// age = 90;   //ok
// age = "died"  //ok 
// age = "mishal" //error
