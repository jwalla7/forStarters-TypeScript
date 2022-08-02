class GuestAccount {
    name: string;
    id: number;
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
