"use strict";
/**
 *
 * TypeScript's type system allows you to build new types out of existing ones using a variety of operators.
 * A union type is a type formed from two or more other types.
 *
 */
function printId(id) {
    console.log(`Your ID is: ${id}`);
}
function combine(input_1, input_2) {
    /**
     *
     * TypeScript will only allow an operation if it is valid for every member of the union.
     *  For example, if you have the union 'string | number', you can't use methods that are only available for 'string'
     * Narrowing: One way to solve this is by being more specific, an 'if' statement will suffice.
     *
     * */
    let result;
    if (typeof input_1 === 'number' && typeof input_2 === 'number') {
        result = input_1 + input_2;
        console.log(result);
    }
    if (typeof input_1 === 'string' && typeof input_2 === 'string') {
        let result = `${input_1.toString().toUpperCase()} ${input_2.toString().toUpperCase()}`;
        console.log(result);
    }
    return result;
}
printId(101);
printId("202");
combine(1, 2);
combine("heLLo", "wOrLD");
