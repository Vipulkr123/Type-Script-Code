"use strict";
class Car {
    constructor(color) {
        this.Color = color;
    }
}
class Audi extends Car {
    constructor(color, price) {
        super(color);
        this.Price = price;
    }
    display() {
        console.log("Color of Audi car: " + this.Color);
        console.log("Price of Audi car: " + this.Price);
    }
}
let obj = new Audi(" Black", 8500000);
obj.display();
class GrandParent {
    constructor() {
        console.log(`This is a grand parent Constructor`);
    }
    method() {
        console.log(`This is a grand parent method`);
    }
}
class Parent extends GrandParent {
    constructor() {
        super();
        console.log(`This is a parent Constructor`);
    }
    method() {
        console.log(`This is a parent method`);
    }
}
class Child extends Parent {
    constructor() {
        super();
        console.log(`This is a Child Constructor`);
    }
    method() {
        console.log(`This is a Child method`);
    }
}
const childObj = new Child();
childObj.method();
