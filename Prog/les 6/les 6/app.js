var readlineSync = require('readline-sync'),
    s1 = "",
    s2 = "",
    s3 = "";

function A(a) {
    for (var i = 0; i < a.length; i++) {
        s1 = a[i];
        s3 = s3 + s1.toUpperCase();
        i++;
        if (i <= a.length) {
            s2 = a[i];
            s3 = s3 + s2.toUpperCase();
        }
    }
    return s3;
}

//console.log("here you go: " + A(readlineSync.question("type a word: ")));


function B() {
    let Marray = [1, true, "hello World", 213, "test"],
        array1 = ["nee", 6, false],
        array2 = [];

    console.log("array: " + Marray);
    Marray.pop(1);
    console.log("pop: " + Marray);
    Marray.push("push");
    console.log("push: " + Marray);
    Marray.shift();
    console.log("shift" + Marray);
    Marray.unshift(1);
    console.log("unshift: " + Marray);
    Marray[1] = 2;
    console.log("change specific: " + Marray);
    let length = Marray.length;
    console.log("length" + length);
    array2 = Marray.concat(array1);
    console.log("array" + array2);
    Marray.splice(2, 0, "Splice");
    console.log(Marray);
    Marray = Marray.toString();
    console.log(Marray);
}

//B();

function C() {
    let stuff = ['c', 5645, 9393.77, "hello", true, false, "Good morning", 88, -90, 777.777, 90, 665.33, "F"],
        numbers = [],
        strings = [],
        booleans = [];
    if (typeof (stuff[0]) == "number") {   //met deze if statement wordt gekeken of het eerste element een getal is8
        console.log("number found")
    }

    for (let i = 0; i < stuff.length; i++) {
        if (typeof (stuff[i]) == "number") {
            numbers.push(stuff[i]);
        }
        if (typeof (stuff[i]) == "boolean") {
            booleans.push(stuff[i]);
        }
        if (typeof (stuff[i]) == "string") {
            strings.push(stuff[i]);
        }
    }

    console.log(strings);
    console.log(numbers);
    console.log(booleans);
}

C();

while (D) {
    let awnser = readlineSync.question("do you want to add or remove a item? (Add/Remove)");

    if (awnser == "add" || awnser == "Add") {

    }
}

//D = true;

