export {}
//first way to declare an array
let fruits: string[] = ['Apple', 'Orange', 'Banana'];
console.log(fruits);
//second way to declare an array
let students :Array<string> = ['Vipul', 'Divu', 'Aman'];
console.log(students);

//Array Object
let name:string[] = new Array("Vipul","23","Typescript","learning");  
for(var i = 0;i<name.length;i++) {
   console.log(name[i]);
}

//Passing Arrays to Functions

function display(arr_values:string[]) {
    for(let i = 0;i<arr_values.length;i++) {
       console.log(arr_values[i]);
    }
 }
 //Calling arrays in function
 display(name);