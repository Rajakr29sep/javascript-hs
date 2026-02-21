"use strict"; // Enable strict mode for better error handling and to prevent certain actions that can lead to bugs for modern engines

// Data Types in JavaScript

//alert(4); we are not using alert because it is a blocking function and can disrupt the flow of our code, especially in a learning environment. Instead, we will use console.log to display output in the console, which is non-blocking and allows us to see the results without interrupting our coding process.  // we are not using browser

// Primitive Data Types
//number
//string
//boolean
//null
//undefined
//symbol (ES6)

// Non-Primitive Data Types
//object
//array
//function

//NOTE -- importtant 

console.log(typeof 42); // number
console.log(typeof "Hello");
console.log(typeof true);
console.log(typeof null); // object (this is a known quirk in JavaScript)//@@@@@@@@@@@@@@@---object
console.log(typeof undefined);      //@@@@@@@@@@@@@@@@@@undefined--undefined
console.log(typeof Symbol("id")); // symbol
console.log(typeof { name: "Alice", age: 30 });
console.log(typeof [1, 2, 3]);
console.log(typeof function() { return "Hello"; });