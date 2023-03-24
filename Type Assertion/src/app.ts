// let name;
// name = "Vipul";
// console.log(typeof name);

// // first way of type insertion
// var stringLength = (<string>name).length;
// console.log(stringLength);

// // second way of type insertion
// var firstLetter = (name as string).charAt(0);
// console.log(firstLetter);

// // let student = { };
// // student.name = "Rohit"; //Compiler Error: Property 'name' doesn?t exist on type '{}'
// // student.code = 123; //Compiler Error: Property 'code' doesn?t exist on type '{}'

// // Object type insertion
// interface Student {
//   name: string;
//   code: number;
// }
// let student = <Student>{};
// student.name = "Vipul"; // Correct
// student.code = 153; // Correct
// console.log(student.name);
// console.log(student.code);

// const addOrConcat = (num1: number, num2: number, c: "add" | "concat") => {
//   if (c == "add") return num1 + num2;
//   return "" + num1 + num2;
// };

// const logMsg = (msg: any) => {
//   console.log(msg);
// };

// logMsg(addOrConcat(1, 2, "add"));
// logMsg(addOrConcat(1, 2, "concat"));

// // Beaware it a bug |-----------------------------------------------------|
// let myValue: number = addOrConcat(1, 2, "concat") as number;
// let myValue2: string = addOrConcat(1, 2, "add") as string;
// logMsg(myValue);
// logMsg(myValue2);

// // double casting or forcasting to string
// const DoubleCasting = 10 as unknown as string;
// logMsg(DoubleCasting);

const img = document.querySelector(".img") as HTMLImageElement;

img.src = "../../src/laptop.jpg";
img.width = 100;

const img2 = document.createElement("img");
const imageTag = document.getElementById("header")!;
imageTag.appendChild(img2);

img2.src = "../../src/Vipul.png";
img2.width = 100;
