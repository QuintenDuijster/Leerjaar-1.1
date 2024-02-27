
console.log("\nOpdracht1"); // opdracht1 
var readlineSync = require('readline-sync'),
    huidigeTijd = new Date();

if (huidigeTijd.getHours() > 9 && huidigeTijd.getHours() < 16) {
    console.log("je hebt school");
} else {
    console.log("je hebt geen school");
}


console.log("\nOpdracht2"); // opdracht2
console.log("hoe oud bent u");
leeftijd = readlineSync.questionInt("leeftijd: ");

if (leeftijd >= 18) {
    console.log("mag ik u ID zien?");
    antwoord = readlineSync.keyInYN();
    if (antwoord == 1) {
        console.log("kom verder.");
    } else {
        console.log("zonder id mag ik u niet binnen laten.");
    }
} else {
    console.log("dan mag je niet naar binnen.");
}

console.log("\nOpdracht3"); // opdracht3
switch (huidigeTijd.getDay()) {
    case 1: console.log("het is maandag je moet naar school");
        break;
    case 2: console.log("het is dinsdag je moet naar school");
        break;
    case 3: console.log("het is woensdag je moet naar school");
        break;
    case 4: console.log("het is donderdag je moet naar school");
        break;
    case 5: console.log("het is vrijdag je moet naar school");
        break;
    case 6: console.log("het is zaterdag bent vrij");
        break;
    case 7: console.log("het is zondag bent vrij");
        break;
    default:
        console.log("welke fucking dag is het dan!");
}


