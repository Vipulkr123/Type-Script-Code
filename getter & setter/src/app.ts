let passcode = "secret passcode";

class Student {
  private _fullName: string;
  constructor(_fullName: string) {
    this._fullName = _fullName;
  }

  get fullName(): string {
    return this._fullName;
  }

  set fullName(newName: string) {
    if (passcode && passcode == "secret passcode") {
      this._fullName = newName;
    } else {
      console.log("Unauthorized update of student detail!");
    }
  }
}

let stud = new Student("Vipul");
stud.fullName = "Vipul Kumar Upadhyay";
if (stud.fullName) {
  console.log(stud.fullName);
}
