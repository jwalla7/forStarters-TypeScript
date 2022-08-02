"use strict";
/**
 *
 * Similar to the 'any' Type with more control.
 *  The 'unknown' type is not assignable without type checking
 *
 */
let userInput;
let userName;
userInput = 5;
userInput = 'Kim';
if (typeof userInput === 'string') {
    userName = userInput;
}
