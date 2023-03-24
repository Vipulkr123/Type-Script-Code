// type studentData = {
//   name: string;
//   age: number;
//   branch: string;
//   dob: string | number;
// };

class Student {
  constructor(
    readonly name: string,
    public age: number,
    private branch: string,
    protected dob: string | number
  ) {
    this.name = name;
    this.age = age;
    this.branch = branch;
    this.dob = dob;
  }

  public getDetails() {
    const details = `name : ${this.name}, age : ${this.age}, branch : ${this.branch}, dob : ${this.dob}`;
    console.log(details);
  }
}

const st = new Student("Vipul", 23, "CE", "7th July");
st.getDetails();
