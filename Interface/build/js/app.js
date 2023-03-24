"use strict";
let OperatingSystem = (type) => {
    console.log("Android " + type.name + " has " + type.language + " language.");
};
let Oreo = { name: "O", language: "Java" };
OperatingSystem(Oreo);
let empObject = {};
empObject.name = "Vipul Kumar Upadhyay";
empObject.age = 23;
empObject.gender = "Male";
empObject.empCode = 143;
console.log("Name: " + empObject.name);
console.log("Employee Code: " + empObject.empCode);
// use of the interface
let myNames;
myNames = ["Virat", "Rohit", "Sachin"];
var myAges;
myAges = [10, 18, 25];
console.log("My age is: " + myAges[1]);
// implementing the interface
class Employee {
    FullName() {
        return this.firstName + " " + this.lastName;
    }
    GetAge() {
        return this.age;
    }
    constructor(firstN, lastN, getAge) {
        this.firstName = firstN;
        this.lastName = lastN;
        this.age = getAge;
    }
}
// using the class that implements interface
let myEmployee = new Employee("Vipul", "Upadhyay", 25);
let fullName = myEmployee.FullName();
let Age = myEmployee.GetAge();
console.log("Name of Person: " + fullName + "\nAge: " + Age);
