"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//first way to declare an array
var fruits = ['Apple', 'Orange', 'Banana'];
console.log(fruits);
//second way to declare an array
var students = ['Vipul', 'Divu', 'Aman'];
console.log(students);
//Array Object
var name = new Array("Vipul", "23", "Typescript", "learning");
for (var i = 0; i < name.length; i++) {
    console.log(name[i]);
}
//Passing Arrays to Functions
function display(arr_values) {
    for (var i_1 = 0; i_1 < arr_values.length; i_1++) {
        console.log(arr_values[i_1]);
    }
}
//Calling arrays in function
display(name);
