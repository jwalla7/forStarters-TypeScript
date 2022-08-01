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
        console.log(" Unknown Location \n Latitude Coordinate: ".concat(object.lati_coord, " \n Longitude Coordinate: ").concat(object.long_coord));
        return;
    }
    console.log("".concat(object.location, " Location \n Latitude Coordinate: ").concat(object.lati_coord, " \n Longitude Coordinate: ").concat(object.long_coord));
    return;
}
// Generic, not best practice
var basketball_team = {
    name: "Lakers",
    roster_cap: 166126381.00,
    common_lineup: ["Russell Westbrook", "Malik Monk", "Austin Reaves", "Stanley Johnson", "LeBron James"],
    position: [1, "pg"]
};
// Generic, not best practice
var animal = {
    name: "Lion",
    habitat: "Jungle"
};
// Better Practice
var person = {
    name: "Jeremiah",
    age: 31
};
for (var _i = 0, _a = basketball_team.common_lineup; _i < _a.length; _i++) {
    var name_1 = _a[_i];
    console.log("name: ".concat(name_1.toUpperCase()));
}
;
// Object types as parameters
function legalName(obj) {
    // Edge Case: If middle_name is 'undefined'
    if (obj.middle == undefined) {
        return console.log("first name: ".concat(obj.first, ", \n middle name: N/A, \n last name: ").concat(obj.last));
    }
    console.log("first name: ".concat(obj.first, ", \n middle name: ").concat(obj.middle, ", \n last name: ").concat(obj.last));
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
