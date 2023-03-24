"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Numeric Enums
var Direction;
(function (Direction) {
    Direction[Direction["Up"] = 1] = "Up";
    Direction[Direction["Down"] = 2] = "Down";
    Direction[Direction["Left"] = 3] = "Left";
    Direction[Direction["Right"] = 4] = "Right";
})(Direction || (Direction = {}));
console.log(Direction);
// Default value of numeric enum
var Direction2;
(function (Direction2) {
    Direction2[Direction2["Up"] = 0] = "Up";
    Direction2[Direction2["Down"] = 1] = "Down";
    Direction2[Direction2["Left"] = 2] = "Left";
    Direction2[Direction2["Right"] = 3] = "Right";
})(Direction2 || (Direction2 = {}));
console.log(Direction2);
// We can also assign without sequence number
var Direction3;
(function (Direction3) {
    Direction3[Direction3["Up"] = 1] = "Up";
    Direction3[Direction3["Down"] = 3] = "Down";
    Direction3[Direction3["Left"] = 6] = "Left";
    Direction3[Direction3["Right"] = 10] = "Right";
})(Direction3 || (Direction3 = {}));
console.log(Direction3);
// Enum as a function argument
var AppStatus;
(function (AppStatus) {
    AppStatus[AppStatus["ACTIVE"] = 0] = "ACTIVE";
    AppStatus[AppStatus["INACTIVE"] = 1] = "INACTIVE";
    AppStatus[AppStatus["ONHOLD"] = 2] = "ONHOLD";
})(AppStatus || (AppStatus = {}));
function checkStatus(status) {
    console.log(status);
}
checkStatus(AppStatus.ONHOLD);
// String Enums
var AppStatus2;
(function (AppStatus2) {
    AppStatus2["ACTIVE"] = "ACT";
    AppStatus2["INACTIVE"] = "INACT";
    AppStatus2["ONHOLD"] = "HLD";
    AppStatus2["ONSTOP"] = "STOP";
})(AppStatus2 || (AppStatus2 = {}));
function checkStatus2(status) {
    console.log(status);
}
checkStatus2(AppStatus2.ONSTOP);
// Heterogeneous Enums
var AppStatus3;
(function (AppStatus3) {
    AppStatus3["ACTIVE"] = "Yes";
    AppStatus3[AppStatus3["INACTIVE"] = 1] = "INACTIVE";
    AppStatus3[AppStatus3["ONHOLD"] = 2] = "ONHOLD";
    AppStatus3["ONSTOP"] = "STOP";
})(AppStatus3 || (AppStatus3 = {}));
console.log(AppStatus3.ACTIVE);
console.log(AppStatus3.ONHOLD);
var Weekend;
(function (Weekend) {
    Weekend[Weekend["Friday"] = 1] = "Friday";
    Weekend[Weekend["Saturday"] = getDate("Dominoz")] = "Saturday";
    Weekend[Weekend["Sunday"] = Weekend.Saturday * 40] = "Sunday";
})(Weekend || (Weekend = {}));
function getDate(day) {
    if (day === "Dominoz") {
        return 3;
    }
    else {
        return 0;
    }
}
console.log(Weekend.Saturday);
console.log(Weekend.Sunday);
