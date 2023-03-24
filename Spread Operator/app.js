var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var arr1 = [1, 2, 3];
var arr2 = [4, 5, 6];
//Create new array from existing array
var copyArray = __spreadArray([], arr1, true);
console.log("CopiedArray: " + copyArray);
//Create new array from existing array with more elements
var newArray = __spreadArray(__spreadArray([], arr1, true), [7, 8], false);
console.log("NewArray: " + newArray);
//Create array by merging two arrays
var mergedArray = __spreadArray(__spreadArray([], arr1, true), arr2, true);
console.log("MergedArray: " + mergedArray);
