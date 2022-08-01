// Generic, not best practice
const basketball_team: {
    name: string;
    roster_cap: number;
    common_lineup: string[];
    position: [number, string]; // Tuple
    // push() method is an exception and will not get detected.
    // for example: basketball_team.position.push("bench"); will compile
} = {
    name: "Lakers",
    roster_cap: 166126381.00,
    common_lineup: ["Russell Westbrook", "Malik Monk", "Austin Reaves", "Stanley Johnson", "LeBron James"],
    position: [1, "pg"]
}

// Generic, not best practice
const animal: object = {
    name: "Lion",
    habitat: "Jungle"
};

// Better Practice
const person = {
    name: "Jeremiah",
    age: 31
};

for (const name of basketball_team.common_lineup) {
    console.log(`name: ${name.toUpperCase()}`);
};

// Object types as parameters
function legalName(obj: { first: string; middle?: string; last: string }) {
    // Edge Case: If middle_name is 'undefined'
    if (obj.middle == undefined) {
        return console.log(`first name: ${obj.first}, \n middle name: N/A, \n last name: ${obj.last}`)
    }
    console.log(`first name: ${obj.first}, \n middle name: ${obj.middle}, \n last name: ${obj.last}`)
}

legalName({first: "Jason", middle: "R", last: "Mayflower"});
legalName({first: "Britney", last: "Wagner"});
// compile error
// console.log(legalName({first: "Christian", middle: "Walker)"})


console.log(basketball_team);
console.log(animal);
console.log(person);


