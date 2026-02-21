const account = 12345;
let balance = 1000.50;
var accountHolder = "John Doe";
acc = "12345"; // Implicit global variable (not recommended)
let pi ; //underfined 
console.table({ account, balance, accountHolder, acc ,pi});
//prefer not to use var because of its function scope and hoisting behavior, which can lead to unexpected bugs. Instead, use let and const for better readability and maintainability of your code.
console.log(typeof acc);