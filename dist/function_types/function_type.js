"use strict";
/**
 *
 * Parameter Type Annotations: You can add type annotations after each parameter to declare what 'type'
 *  each parameter will accept.
 *  For example, function add(parameter: type, parameter2: type) {}
 *
 * Return Type Annotations appear after the parameter list.
 *  For example, function getNumber(): type {}
 *
 */
// Parameter Annotations
function add(n1, n2) {
    return n1 + n2;
}
//  Return Type Annotation 'void'
function printResult(num) {
    console.log(`Result: ${num}`);
}
printResult(add(1, 2));
// Generic
let combineValues;
combineValues = add;
console.log(combineValues(3, 4));
//  Better Practice
let combineNumbers;
combineNumbers = add;
console.log(combineNumbers(3, 3));
function addAndHandle(a, b, callback) {
    const result = a + b;
    callback(result);
}
addAndHandle(10, 20, (callbackResult) => {
    console.log(callbackResult);
});
//# sourceMappingURL=function_type.js.map