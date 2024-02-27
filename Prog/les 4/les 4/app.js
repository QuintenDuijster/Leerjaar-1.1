var readlineSync = require('readline-sync');

console.log("\nOpdracht1") //opdracht1

function A() {
    var g1 = 0,
        g2 = 1,
        g3 = 0;

    console.log(g1);
    console.log(g2);

    while (g3 < 100000) {
        g3 = g1 + g2;
        g1 = g2;
        g2 = g3;
        console.log(g3);
    }
}

A();


console.log("\nOpdracht2") //opdracht2
var raad = true,
    randomgetal = Math.floor(Math.random() * 100),
    getal;

console.log("raad het getal ");

while (raad == true) {
    getal = readlineSync.questionInt("number: ");
    if (getal == randomgetal) {
        console.log("juist");
        raad = false
    } else if (getal < randomgetal) {
        console.log("hoger");
    } else if (getal > randomgetal){
        console.log("lager");
    }
}

console.log("\nOpdracht3") //opdracht3

for (var i = 1; i <= 50; i++) {
    console.log("tafel van " + i);
    for (var x = 1; x <= 50; x++) { 
    console.log(i * x);
    }
}

console.log("\nOpdracht4") //opdracht4


function factorial(n) {
    var m = 1;
    for (var g = 1; g <= n; g++) {
        m = m * g;
    }
    return m;
}

n = readlineSync.questionInt("number: ");
var result = factorial(n);
console.log(result);

console.log("\nOpdracht5") //opdracht5

var score = 0,
    CookieClicker = true;

while (CookieClicker == true) {
    console.log("score: " + score);
    A = readlineSync.keyInYN("wil je klikken");

    if (A == true) {
        score++;
    }else {
        console.log("Game Over je score is " + score + " punten");
        CookieClicker = false;
    }
}