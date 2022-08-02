"use strict";
class GuestAccount {
    constructor(name, id) {
        this.name = name;
        this.id = id;
    }
}
const guest = {
    name: "Hayes",
    id: 0,
    access: "limited"
};
console.log(guest);
