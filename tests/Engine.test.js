// tests/Engine.test.js
const Engine = require('../src/Engine');

console.log("Testing Engine Class:");

const engine = new Engine(150);

console.log("\nInitial engine status:");
console.log(`Horsepower: ${engine.horsepower}`);
console.log(`Status: ${engine.status}`);

console.log("\nStarting the engine:");
engine.ignite();
console.log(`Status: ${engine.status}`);

console.log("\nRevving the engine:");
engine.rev();

console.log("\nStopping the engine:");
engine.shutdown();
console.log(`Status: ${engine.status}`);

console.log("\nTrying to rev the engine when it's off:");
engine.rev();
