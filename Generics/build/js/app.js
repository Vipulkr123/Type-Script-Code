"use strict";
function users(data) {
    return data;
}
console.log(users("Vipul"));
console.log(users(30));
console.log(users(true));
function students(data) {
    return data;
}
console.log(students("Vipul"));
console.log(students(30));
console.log(students(true));
function identity(arg) {
    return arg;
}
let output1 = identity("myString");
let output2 = identity(100);
console.log(output1);
console.log(output2);
