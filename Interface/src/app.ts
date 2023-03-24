interface OS {
  name: String;
  language: String;
}
let OperatingSystem = (type: OS): void => {
  console.log("Android " + type.name + " has " + type.language + " language.");
};
let Oreo = { name: "O", language: "Java" };
OperatingSystem(Oreo);

// Interface Inheritance

interface Person {
  name: string;
  age: number;
}
interface Employee extends Person {
  gender: string;
  empCode: number;
}
let empObject = <Employee>{};
empObject.name = "Vipul Kumar Upadhyay";
empObject.age = 23;
empObject.gender = "Male";
empObject.empCode = 143;
console.log("Name: " + empObject.name);
console.log("Employee Code: " + empObject.empCode);

// Array Interface

// Array which return string
interface nameArray {
  [index: number]: string;
}
// use of the interface
let myNames: nameArray;
myNames = ["Virat", "Rohit", "Sachin"];

// Array which return number
interface ageArray {
  [index: number]: number;
}
var myAges: ageArray;
myAges = [10, 18, 25];
console.log("My age is: " + myAges[1]);

// Interface in a class
// defining interface for class
interface Person {
  firstName: string;
  lastName: string;
  age: number;
  FullName(): any;
  GetAge(): any;
}
// implementing the interface
class Employee implements Person {
  firstName: string;
  lastName: string;
  age: number;
  FullName() {
    return this.firstName + " " + this.lastName;
  }
  GetAge() {
    return this.age;
  }
  constructor(firstN: string, lastN: string, getAge: number) {
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
