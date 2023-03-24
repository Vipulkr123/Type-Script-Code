"use strict";
// type studentData = {
//   name: string;
//   age: number;
//   branch: string;
//   dob: string | number;
// };
class Student {
    constructor(name, age, branch, dob) {
        this.name = name;
        this.age = age;
        this.branch = branch;
        this.dob = dob;
        this.name = name;
        this.age = age;
        this.branch = branch;
        this.dob = dob;
    }
    getDetails() {
        const details = `name : ${this.name}, age : ${this.age}, branch : ${this.branch}, dob : ${this.dob}`;
        console.log(details);
    }
}
const st = new Student("Vipul", 23, "CE", "7th July");
st.getDetails();
