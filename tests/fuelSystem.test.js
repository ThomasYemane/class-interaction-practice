// tests/FuelSystem.test.js
const FuelSystem = require('../src/FuelSystem');

console.log("Testing FuelSystem Class:");

const fuelSystem = new FuelSystem(50);

console.log("\nInitial fuel level:");
console.log(`Fuel Level: ${fuelSystem.checkFuelLevel()} L`);

console.log("\nConsuming fuel:");
fuelSystem.consume();
console.log(`Fuel Level after consumption: ${fuelSystem.checkFuelLevel()} L`);

console.log("\nRefueling:");
fuelSystem.refuel(20);
console.log(`Fuel Level after refueling: ${fuelSystem.checkFuelLevel()} L`);
