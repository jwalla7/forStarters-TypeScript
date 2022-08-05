"use strict";
class Animal {
    // Shorthand Initialization, create class property/variable instances at the constructor level.
    constructor(species, name) {
        this.species = species;
        this.name = name;
        this.species = species;
        this.name = name;
    }
}
class Lion extends Animal {
    constructor(species, name, habitat) {
        super(species, 'Lion');
        this.habitat = habitat;
        this.habitat = 'Plains';
    }
}
class WestAfricanLion extends Lion {
    constructor(species, name, habitat, location) {
        super(species, name, habitat);
        this.habitat = habitat;
        this.location = location;
        this.location = location;
    }
}
// Subclasses without their own constructor implicitly use the constructor of their base/parent class.
class CimbaTheLion extends WestAfricanLion {
}
const theLionKing = new CimbaTheLion('Mammal', 'Lion', 'Plains', 'West Africa');
console.log(theLionKing);
//# sourceMappingURL=super.js.map