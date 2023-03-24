"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Passing Union Type in Function Parameter
function display(value) {
    if (typeof value === "number")
        console.log("The given value is of type number.");
    else if (typeof value === "string")
        console.log("The given value is of type string.");
}
display(153);
display("Vipul");
// Passing Union Type to Arrays
var arrType;
var i;
arrType = [1, 2, 3, 4];
console.log("Numeric type array:");
for (i = 0; i < arrType.length; i++) {
    console.log(arrType[i]);
}
arrType = ["India", "America", "England"];
console.log("String type array:");
for (i = 0; i < arrType.length; i++) {
    console.log(arrType[i]);
}
var myColor = "red";
console.log(myColor.toUpperCase());
