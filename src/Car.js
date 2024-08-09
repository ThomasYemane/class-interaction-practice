// src/Car.js
const Engine = require('./Engine');
const Wheel = require('./Wheel');
const FuelSystem = require('./FuelSystem');
const Dashboard = require('./Dashboard');

class Car {
    constructor(enginePower, wheelSize, fuelLevel) {
        this.engine = new Engine(enginePower);
        this.wheels = [
            new Wheel(wheelSize, "front-left"),
            new Wheel(wheelSize, "front-right"),
            new Wheel(wheelSize, "rear-left"),
            new Wheel(wheelSize, "rear-right")
        ];
        this.fuelSystem = new FuelSystem(fuelLevel);
        this.dashboard = new Dashboard();
    }

    start() {
        this.engine.ignite();
        this.dashboard.update(0, this.fuelSystem.checkFuelLevel());
    }

    stop() {
        this.engine.shutdown();
        this.dashboard.update(0, this.fuelSystem.checkFuelLevel());
    }

    accelerate() {
        this.engine.rev();
        this.fuelSystem.consume();
        this.dashboard.update(this.dashboard.speed + 10, this.fuelSystem.checkFuelLevel());
    }

    checkStatus() {
        this.dashboard.displaySpeed();
        this.dashboard.displayFuelLevel();
    }
}

module.exports = Car;
