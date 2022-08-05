class Animal {
    // Shorthand Initialization, creates class property/variable instances at the constructor level.
    constructor(private species: string, private name: string) {
        this.species = species;
        this.name = name;
    }
}

class Lion extends Animal {
    constructor(species: string, name: string, readonly habitat: string) {
        super(species, 'Lion')
        this.habitat = 'Plains';
    }
}

class WestAfricanLion extends Lion {
    constructor(species: string, name: string, readonly habitat: string, private location: string) {
        super(species, name, habitat)
        this.location = location
    }
}

// Subclasses without their own constructor implicitly use the constructor of their base/parent class.
class CimbaTheLion extends WestAfricanLion {}

const theLionKing = new CimbaTheLion('Mammal', 'Lion', 'Plains', 'West Africa');
console.log(theLionKing);

