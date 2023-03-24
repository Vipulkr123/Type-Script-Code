export {};

// Single quoted strings
var name: String = "Vipul";
console.log(name);

// Double quoted strings
var myName: String = "Vipul";
console.log(myName);

// String Literal Type
type Pet = "cat" | "dog" | "Rabbit";
let pet: Pet;
if ((pet = "cat")) {
  console.log("Correct");
}

// It gives Compilation Error
// if ((pet = "Deer")) {
//   console.log("compilation error");
// }

// Function Parameter
type FruitsName = "Apple" | "Mango" | "Orange";
function showFruitName(fruitsName: FruitsName): void {
  console.log(fruitsName);
}
showFruitName("Mango"); //OK - Print 'Mango'

// It gives Compilation Error
// showFruitName('Banana');
