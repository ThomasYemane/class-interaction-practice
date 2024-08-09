// src/FuelSystem.js
class FuelSystem {
    constructor(fuelLevel) {
        this.fuelLevel = fuelLevel;
        this.consumptionRate = 5; // Arbitrary rate for demonstration
    }

    refuel(amount) {
        this.fuelLevel += amount;
        console.log(`Refueled: Current fuel level is ${this.fuelLevel}.`);
    }

    consume() {
        this.fuelLevel -= this.consumptionRate;
        console.log(`Fuel consumed: Current fuel level is ${this.fuelLevel}.`);
    }

    checkFuelLevel() {
        return this.fuelLevel;
    }
}

module.exports = FuelSystem;
