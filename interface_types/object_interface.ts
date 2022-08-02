class GuestAccount {
    name: string;
    id: number;

    constructor(name: string, id: number) {
        this.name = name;
        this.id = id;
    }
}
interface Guest {
    name: string;
    id: number;
    access: string;
}

const guest: Guest = {
    name: "Hayes",
    id: 0,
    access: "limited"
};

console.log(guest);
