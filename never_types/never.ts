

function generateError(message: string, code: number): never {
    throw { message: message, errorCode: code};
    // another use case: while(true) {}
}

const results = generateError('An error occurred', 500);
console.log(results);