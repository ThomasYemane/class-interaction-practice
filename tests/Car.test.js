// tests/Car.test.js
const Car = require('../src/Car');

const myCar = new Car(150, 17, 50);

console.log("Starting the car:");
myCar.start();
myCar.checkStatus();

console.log("\nAccelerating the car:");
myCar.accelerate();
myCar.checkStatus();

console.log("\nStopping the car:");
myCar.stop();
myCar.checkStatus();
