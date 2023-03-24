const add = (num1: number, num2: number) => num1 + num2;

const logMsg = (msg: any): void => {
  console.log(msg);
};

logMsg("Hello");
logMsg(add(5, 6));

// Using Type
// type mathFunction = (num1: number, num2: number) => number;

// using Interface
interface mathFunction {
  (num1: number, num2: number): number;
}

let multiply: mathFunction = (num1: number, num2: number) => {
  return num1 * num2;
};

logMsg(multiply(5, 6));

const addAll = (num1: number, num2: number, num3?: number): number => {
  if (typeof num3 !== "undefined") {
    return (num1 = num2 + num3);
  } else {
    return num1 + num2;
  }
};

logMsg(addAll(5, 7));
logMsg(addAll(5, 7, 9));

const sumAll = (num1: number, num2: number, num3: number = 7): number => {
  return num1 + num2 + num3;
};

logMsg(sumAll(5, 7));
logMsg(sumAll(5, 7, 9));
