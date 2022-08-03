

function generateError(message: string, code: number): never {
    throw { message: message, errorCode: code};
    // another use case: while(true) {}
}

const results = generateError('This is a test error for /never_types/never.ts', 500);
console.log(results);