"use strict";
let passcode = "secret passcode";
class Student {
    constructor(_fullName) {
        this._fullName = _fullName;
    }
    get fullName() {
        return this._fullName;
    }
    set fullName(newName) {
        if (passcode && passcode == "secret passcode") {
            this._fullName = newName;
        }
        else {
            console.log("Unauthorized update of student detail!");
        }
    }
}
let stud = new Student("Vipul");
stud.fullName = "Vipul Kumar Upadhyay";
if (stud.fullName) {
    console.log(stud.fullName);
}
