var readlineSync = require('readline-sync');

console.log("\nOpdracht1") // opdracht1
function A(woordDatGeschudtMoetWorden) {
    const characters = woordDatGeschudtMoetWorden.split('');
    for (let i = characters.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [characters[i], characters[j]] = [characters[j], characters[i]];
    }
    const geschudWoord = characters.join('');

    return geschudWoord;
}

woord = readlineSync.question("type a word: ");
console.log("here you go: " + A(woord));


console.log("\nOpdracht2.1") // opdracht2.1
function berekenInhoud(X, Y, Z) {
    inhoud = X * Y * Z;
    return inhoud;
}

X = readlineSync.questionInt("X= ");
Y = readlineSync.questionInt("Y= ");
Z = readlineSync.questionInt("Z= ");
console.log("inhoud cubes: " + berekenInhoud(X, Y, Z) + "M(3)");

console.log("\nOpdracht2.2") // opdracht2.2
function berekenInhoudCylinder(radius, hoogte) {
    inhoud = (radius * radius) * 3.1415926535 * hoogte;
    return inhoud;
}

diameter = readlineSync.questionInt("diameter= ");
hoogte = readlineSync.questionInt("hoogte= ");
console.log("inhoud cylinder : " + berekenInhoudCylinder(diameter, hoogte) + "M(3)");

console.log("\nOpdracht2.3") // opdracht2.3
function langeZijde(lenghte, hoogte) {
    lengte2 = lenghte * lenghte;
    hoogte2 = hoogte * hoogte;
    langeZijde2 = lengte2 + hoogte2;
    langeZijde = langeZijde2;
    return langeZijde;
}

lenghte = readlineSync.questionInt("lenghte= ");
hoogte = readlineSync.questionInt("hoogte= ");
console.log("lange zijde : " + langeZijde(lenghte, hoogte) + "M");

console.log("\nOpdracht2.4") // opdracht2.4
function gemidelde(g1, g2, g3, g4, g5, g6, g7) {
    gA = g1 + g2 + g3 + g4 + g5 + g6 + g7;
    gB = gA / 7;
    return gB;
}

g1 = readlineSync.questionInt("getal1= ");
g2 = readlineSync.questionInt("getal2= ");
g3 = readlineSync.questionInt("getal3= ");
g4 = readlineSync.questionInt("getal4= ");
g5 = readlineSync.questionInt("getal5= ");
g6 = readlineSync.questionInt("getal6= ");
g7 = readlineSync.questionInt("getal7= ");
console.log("gemidelde= " + gemidelde(g1, g2, g3, g4, g5, g6, g7));

console.log("\nOpdracht3") // opdracht3

var now = new Date();
function leeftijd(jaar, maand, dag) {
    jaaroud = now.getFullYear() - jaar;
    maandoud = now.getMonth() - maand;
    jaarOud = jaaroud + " jaar, " +  maandoud + " maanden oud";
    return jaarOud;
}

jaar = readlineSync.questionInt("jaar: ");
maand = readlineSync.questionInt("maand: ");
console.log("je bent: " + leeftijd(jaar, maand));