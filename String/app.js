"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Single quoted strings
var name = "Vipul";
console.log(name);
// Double quoted strings
var myName = "Vipul";
console.log(myName);
var pet;
if ((pet = "cat")) {
    console.log("Correct");
}
function showFruitName(fruitsName) {
    console.log(fruitsName);
}
showFruitName("Mango"); //OK - Print 'Mango'
// It gives Compilation Error
// showFruitName('Banana');
