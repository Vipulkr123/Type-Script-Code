function users<T>(data: T): T {
  return data;
}

console.log(users<string>("Vipul"));
console.log(users<number>(30));
console.log(users(true));

function students(data: any): any {
  return data;
}

console.log(students("Vipul"));
console.log(students(30));
console.log(students(true));

function identity<T>(arg: T): T {
  return arg;
}
let output1 = identity<string>("myString");
let output2 = identity<number>(100);
console.log(output1);
console.log(output2);
