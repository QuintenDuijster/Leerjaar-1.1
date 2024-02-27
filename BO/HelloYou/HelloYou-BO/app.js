var rls = require('readline-sync'),
    fs = require('node:fs'),
    guiFileContents = fs.readFileSync("./gui.json", "utf-8"),
    guiArray = JSON.parse(guiFileContents),
    arrow = 0,
    screen = 0,
    screenIndex = 0;


function keyPressed(key) {
    let max = guiArray[screen].max;
    switch (key) {
        case "w":
        case "W":
            if (arrow == 0) {
                arrow = max;
            } else {
                arrow--;
            }
            break;
        case "s":
        case "S":
            if (arrow == max) {
                arrow = 0;
            } else {
                arrow++;
            }
            break;
        case "x":
        case "X":
            screen = 0;
            break;
        case " ":
            screen = guiArray[screen].nextQuestion[arrow];
            break;
    }
}

function spacing(string, area) {
    let spacing = "",
        spacingLenght = 0;

    spacingLenght = area.length - string.length;
 
    for (let i = 0; i < spacingLenght; i++) {
        spacing = spacing + " ";
    }

    return spacing;
}

while (true) {
    while (screen == 0) {
        for (let i = 0; i < guiArray[0].text.length; i++) {
            let line = guiArray[0].text[i],
                listArrowOptions1 = ["@@@", "$$$"],
                listArrowOptions2 = ["^^^", "((("];

            line = line.replace(listArrowOptions1[arrow], "-->");
            line = line.replace(listArrowOptions2[arrow], "<--");

            line = line.replace("@@@", "   ");
            line = line.replace("###", "   ");
            line = line.replace("$$$", "   ");
            line = line.replace("^^^", "   ");
            line = line.replace("&&&", "   ");
            line = line.replace("(((", "   ");

            console.log(line);
        }

        key = rls.keyIn('>', { hideEchoBack: true, mask: '' })

        keyPressed(key);
        console.clear();
    }

    while (screen == 1) {
        for (let i = 0; i < guiArray[1].text.length; i++) {
            console.log(guiArray[1].text[i]);
        }

        key = rls.keyIn('>', { hideEchoBack: true, mask: '' })

        screen = guiArray[screen].nextQuestion[0];
        console.clear();
    }

    while (screen > 1) {
        for (let i = 0; i < guiArray[screen].text.length; i++) {
            let line = guiArray[screen].text[i]

            if (arrow == 0) {
                line = line.replace("###", "-->");
                line = line.replace("$$$", "   ");
            } else {
                line = line.replace("$$$", "-->");
                line = line.replace("###", "   ");
            }
            console.log(line);
        }

        key = rls.keyIn('>', { hideEchoBack: true, mask: '' })

        keyPressed(key);
        console.clear();
    }
}
