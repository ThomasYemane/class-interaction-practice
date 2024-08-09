// tests/Dashboard.test.js
const Dashboard = require('../src/Dashboard');

console.log("Testing Dashboard Class:");

const dashboard = new Dashboard();

console.log("\nInitial dashboard display:");
dashboard.display();

console.log("\nUpdating dashboard with speed 60 km/h and fuel level 45 L:");
dashboard.update(60, 45);

console.log("\nDisplaying current speed:");
dashboard.displaySpeed();

console.log("\nDisplaying current fuel level:");
dashboard.displayFuelLevel();
