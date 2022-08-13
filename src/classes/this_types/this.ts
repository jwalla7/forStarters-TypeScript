/**
 * 
 * 'this' refers dynamically to the type of the current class.
 *  
 * https://www.typescriptlang.org/docs/handbook/2/classes.html#this-types
 *
 */

class Box {
    contents: string = "";
    set(value: string) { // (method) Box.set(value: string): this
        this.contents = value;
        return this;
    }
}

class ClearableBox extends Box {
    clear() {
        this.contents = "";
    }
}

const a = new ClearableBox()
const b = a.set("Hello") 

console.log(b);


class Department {
    name: string;

    constructor(n: string) {
        this.name = n;
    }
// When 'describe' is executed the 'this' keyword inside of 'describe' should always refer to an instance 
//  that's based on the 'Department' class
    describe(this: Department) {
        console.log(`Department: ${this.name}`)
    }
}

const accounting = new Department("Accounting");
accounting.describe();

const accounting_2 = {name: 'Accounting_2', describe: accounting.describe}
accounting_2.describe()

