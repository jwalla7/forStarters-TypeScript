"use strict";
class UserAccount {
    constructor(name, id) {
        this.name = name;
        this.id = id;
    }
}
const newUser = new UserAccount("Murphy", 1);
console.log(newUser);
