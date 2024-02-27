console.log("\nOpdracht1"); // opdracht 1
console.log('Hello world');


console.log("\nOpdracht2"); // opdrach 2
var health = 10,
    speed = 1,
    canfly = true,
    name = "Player",
    level = 9,
    lives = 2;

console.log("health: " + health);
console.log("speed: " + speed);
console.log("canfly: " + canfly);
console.log("name: " + name);
console.log("level: " + level);
console.log("lives: " + lives);

console.log("\nOpdracht3"); //opcracht 3
var readlineSync = require("readline-sync");

console.log("welcome user what is your name?");
name = readlineSync.question("name: ");
console.log("welcome " + name + "to my game.");


console.log("\nOpdracht4"); // opdracht 4
gedicht = [
    "vers1",
    "vers2",
    "vers3",
    "vers4"
]


for (var i = 0; i < gedicht.length; i++) { console.log(gedicht[i]); }