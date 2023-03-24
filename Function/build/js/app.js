"use strict";
const add = (num1, num2) => num1 + num2;
const logMsg = (msg) => {
    console.log(msg);
};
logMsg("Hello");
logMsg(add(5, 6));
let multiply = (num1, num2) => {
    return num1 * num2;
};
logMsg(multiply(5, 6));
const addAll = (num1, num2, num3) => {
    if (typeof num3 !== "undefined") {
        return (num1 = num2 + num3);
    }
    else {
        return num1 + num2;
    }
};
logMsg(addAll(5, 7));
logMsg(addAll(5, 7, 9));
const sumAll = (num1, num2, num3 = 7) => {
    return num1 + num2 + num3;
};
logMsg(sumAll(5, 7));
logMsg(sumAll(5, 7, 9));
