"use strict";
console.log("npm init \n npm --save-dev lite-server \n npm install \n npm start");
console.log("tsc --target es2015 <filename>");
console.log("WatchMode: tsc <filename> -w");
console.log("from root folder: tsc --init");
console.log("tsc --init");
console.log("tsc -w");
function addNum(n1, n2) {
    return n1 + n2;
}
const number1 = 3;
const number2 = 3.5;
const result = addNum(number1, number2);
console.log(result);
