"use strict";
/**
 *
 * To define an object type, we simply list it's properties and their types
 * Object types can also specify that some or all of their properties are optional.
 *  To do this, add a '?' after the property name.
 *
 * https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#object-types
 *
 */
function printCoordinates(object) {
    if (typeof object.location === 'undefined') {
        console.log(` Unknown Location \n Latitude Coordinate: ${object.lati_coord} \n Longitude Coordinate: ${object.long_coord}`);
        return;
    }
    console.log(`${object.location} Location \n Latitude Coordinate: ${object.lati_coord} \n Longitude Coordinate: ${object.long_coord}`);
    return;
}
// Generic, not best practice
const basketball_team = {
    name: "Lakers",
    roster_cap: 166126381.00,
    common_lineup: ["Russell Westbrook", "Malik Monk", "Austin Reaves", "Stanley Johnson", "LeBron James"],
    position: [1, "pg"]
};
// Generic, not best practice
const animal = {
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
}
;
// Object types as parameters
function legalName(obj) {
    // Edge Case: If middle_name is 'undefined'
    if (obj.middle == undefined) {
        return console.log(`first name: ${obj.first}, \n middle name: N/A, \n last name: ${obj.last}`);
    }
    console.log(`first name: ${obj.first}, \n middle name: ${obj.middle}, \n last name: ${obj.last}`);
}
legalName({ first: "Jason", middle: "R", last: "Mayflower" });
legalName({ first: "Britney", last: "Wagner" });
// compile error
// console.log(legalName({first: "Christian", middle: "Walker)"})
console.log(printCoordinates({ lati_coord: 48.85837, long_coord: 2.294481 }));
console.log(printCoordinates({ location: "Eiffel Tower", lati_coord: 48.85837, long_coord: 2.294481 }));
console.log(basketball_team);
console.log(animal);
console.log(person);
//# sourceMappingURL=objects.js.map