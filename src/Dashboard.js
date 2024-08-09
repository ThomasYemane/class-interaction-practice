// src/Dashboard.js
class Dashboard {
    constructor() {
        this.speed = 0;
        this.fuelLevel = 0;
    }

    update(speed, fuelLevel) {
        this.speed = speed;
        this.fuelLevel = fuelLevel;
        this.display();
    }

    displaySpeed() {
        console.log(`Current speed: ${this.speed} km/h`);
    }

    displayFuelLevel() {
        console.log(`Current fuel level: ${this.fuelLevel} L`);
    }

    display() {
        this.displaySpeed();
        this.displayFuelLevel();
    }
}

module.exports = Dashboard;
