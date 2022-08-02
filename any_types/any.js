"use strict";
/**
 *
 * Type 'any' is the most flexible type in TypeScript.
 * Use whenever you don't want a particular value to cause typechecking errors.
 * Type 'any' can be assignable,
 *  When you don't specify a type, and TypeScript can't infer it from context, the compiler will
 *  typically default to 'any'.
 *
 * You usually want to avoid this, 'any' isn't typed-checked. Use the compiler flag 'noImplicitAny' to
 *  flag any implicit 'any'
 *
 * https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#any
 *
 */
let obj = { x: 0 };
// None of the following lines of code will throw compiler errors.
// obj.foo();
// obj.push(1);
// obj();
// obj.bar = 100;
// obj = "hello";
// const n: number = obj;
// const s: string[] = obj;
console.log(obj);
