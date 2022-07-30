// Generic, not best practice
const basketball_team: {
    name: string;
    roster_cap: number;
} = {
    name: "Lakers",
    roster_cap: 166126381.00
}

// Generic, not best practice
const animal: object = {
    name: "lion",
    habitat: "jungle"
};

// Better Practice
const person = {
    name: "Jeremiah",
    age: 31
};

console.log(person)