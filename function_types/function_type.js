function add(n1, n2) {
    return n1 + n2;
}
function printResult(num) {
    console.log(`Result: ${num}`);
}
printResult(add(1, 2));
let combineValues;
combineValues = add;
console.log(combineValues(3, 4));
