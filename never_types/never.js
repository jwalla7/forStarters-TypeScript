"use strict";
function generateError(message, code) {
    throw { message: message, errorCode: code };
    // another use case: while(true) {}
}
const results = generateError('An error occurred', 500);
console.log(results);
