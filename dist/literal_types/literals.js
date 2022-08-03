"use strict";
/**
 *
 *  Are types that have specific values
 *
 */
let x = "hello"; // OK
x = "hello"; // OK
// x = "howdy"; Type '"howdy"' is not assignable to type '"hello"'.
// Basic Concatenation Function
function amountOfMoneyInMyPocket(dollars, cents, resultConverstion) {
    let result;
    /**
     *
     * Add control by specificity. Instead of 'resultConversion: string'
     * Use 'resultConversion: 'as-number' | 'as-text''
     *
     * */
    if (typeof dollars === 'number' && typeof cents === 'number' || resultConverstion === 'as-number') {
        result = `${+dollars + +cents}`; // alternative: parseFloat(result);
    }
    if (typeof dollars === 'string' && typeof cents === 'string' || resultConverstion == 'as-text') {
        result = dollars.toString() + cents.toString();
    }
    return result;
}
// Combining literals into unions - for example, functions that only accept a specific set of known values
function printText(s, alignment) {
    //...
}
// Numeric literal types
function compare(a, b) {
    let result;
    result = a === b ? 0 : a > b ? 1 : -1;
    if (result === 0)
        console.log(`${a} is equal to ${b}`);
    if (result === 1)
        console.log(`${a} is not equal to ${b}`);
    if (result === -1)
        console.log(`${a} is not eq ual to ${b}`);
    return result;
}
function configure(x) {
    // ...
}
configure({ width: 100 });
configure("text");
// configure("string"); throws Type Error
console.log(amountOfMoneyInMyPocket(100, 50, 'as-number'));
console.log(amountOfMoneyInMyPocket('299', '35', 'as-number'));
console.log(amountOfMoneyInMyPocket('Christopher', 'Greg', 'as-text'));
console.log(compare("hello", "hello"));
console.log(compare("hello", "world"));
console.log(compare("3", "1"));
console.log(compare("1", "5"));
console.log(compare("welcome", "world"));
//# sourceMappingURL=literals.js.map