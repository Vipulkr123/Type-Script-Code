"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var empTuple = ["Vipul Kumar", 25, "Simform"];
console.log(typeof empTuple);
console.log("Items: " + empTuple);
console.log("Length of Tuple Items before push: " + empTuple.length); // returns the tuple size  
empTuple.push(10001); // append value to the tuple   
console.log("Length of Tuple Items after push: " + empTuple.length);
console.log("Items: " + empTuple);
empTuple.pop(); // removed value to the tuple   
console.log("Length of Tuple Items after pop: " + empTuple.length);
// Update or Modify the Tuple Elements
empTuple[1] = 23;
console.log("Name of the Employee is: " + empTuple[0]);
console.log("Age of the Employee is: " + empTuple[1]);
console.log("".concat(empTuple[0], " is working in ").concat(empTuple[2]));
// Destructuring the Tuple
var emp = empTuple[0], student = empTuple[1];
console.log(emp);
console.log(student);
// Passing Tuple to Functions
function display(tuple_values) {
    for (var i = 0; i < empTuple.length; i++) {
        console.log(empTuple[i]);
    }
}
//Calling tuple in function
display(empTuple);
//  Clear the fields of a Tuple
empTuple = [];
console.log(empTuple);
