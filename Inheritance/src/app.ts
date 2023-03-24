class Car {
  Color: string;
  constructor(color: string) {
    this.Color = color;
  }
}
class Audi extends Car {
  Price: number;
  constructor(color: string, price: number) {
    super(color);
    this.Price = price;
  }
  display(): void {
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
