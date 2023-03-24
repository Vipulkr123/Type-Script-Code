"use strict";
// Use of never type guard
const numberOrString = (value) => {
    if (typeof value === "number")
        return "number";
    if (typeof value === "string")
        return "string";
    return "This is neither a number nor a string";
};
const logMsg = (message) => {
    console.log(message);
};
let x = undefined;
logMsg(numberOrString(50));
// Use Custom type guard
const isNumber = (value) => {
    return typeof value === "number" ? true : false;
};
logMsg(isNumber(7));
logMsg(isNumber("v"));
