/**
 * 
 * Similar to the 'any' Type with more control.
 *  The 'unknown' type is not assignable without type checking
 * 
 */

let userInput: unknown;
let userName: string;

userInput = 5;
userInput = 'Kim';
if (typeof userInput === 'string') {
    userName = userInput;
}

