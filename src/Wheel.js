// src/Wheel.js
class Wheel {
    constructor(size, position) {
        this.size = size;
        this.position = position;
    }

    rotate() {
        console.log(`The wheel at ${this.position} is rotating.`);
    }

    steer(direction) {
        console.log(`The wheel at ${this.position} is steering ${direction}.`);
    }
}

module.exports = Wheel;
