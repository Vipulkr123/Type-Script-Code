export {}
var age: number = 23;          // number variable  
var name: string = "Vipul";     // string variable  
var isUpdated: boolean = true; // Boolean variable   

function displayData(age: number, name: string, isUpdated: boolean) {
    console.log("Hello " + name + " Your age is " + age);
}
displayData(age,name,isUpdated);