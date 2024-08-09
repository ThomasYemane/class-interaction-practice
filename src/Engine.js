// src/Engine.js
class Engine {
    constructor(horsepower) {
        this.horsepower = horsepower;
        this.status = "off";
    }

    ignite() {
        this.status = "on";
        console.log("Engine started.");
    }

    shutdown() {
        this.status = "off";
        console.log("Engine stopped.");
    }

    rev() {
        if (this.status === "on") {
            console.log("Engine revving...");
        } else {
            console.log("Can't rev, the engine is off.");
        }
    }
}

module.exports = Engine;
