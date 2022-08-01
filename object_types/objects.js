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
//  
for (var _i = 0, _a = basketball_team.common_lineup; _i < _a.length; _i++) {
    var name_1 = _a[_i];
    console.log("name: ".concat(name_1.toUpperCase()));
}
;
// Object types as parameters
function legalName(obj) {
    if (obj.middle == undefined) {
        return console.log("first name: ".concat(obj.first, ", \n middle name: N/A, \n last name: ").concat(obj.last));
    }
    console.log("first name: ".concat(obj.first, ", \n middle name: ").concat(obj.middle, ", \n last name: ").concat(obj.last));
}
legalName({ first: "Jason", middle: "R", last: "Mayflower" });
legalName({ first: "Britney", last: "Wagner" });
// compile error
// console.log(legalName({first: "Christian", middle: "Walker)"})
console.log(basketball_team);
console.log(animal);
console.log(person);
