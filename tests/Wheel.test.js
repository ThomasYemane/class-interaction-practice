// tests/Wheel.test.js
const Wheel = require('../src/Wheel');

console.log("Testing Wheel Class:");

const frontLeftWheel = new Wheel(17, "front-left");
const rearRightWheel = new Wheel(17, "rear-right");

console.log("\nWheel details:");
console.log(`Position: ${frontLeftWheel.position}, Size: ${frontLeftWheel.size}`);
console.log(`Position: ${rearRightWheel.position}, Size: ${rearRightWheel.size}`);

console.log("\nRotating the wheels:");
frontLeftWheel.rotate();
rearRightWheel.rotate();

console.log("\nSteering the front-left wheel to the left:");
frontLeftWheel.steer("left");

console.log("\nSteering the rear-right wheel to the right:");
rearRightWheel.steer("right");
