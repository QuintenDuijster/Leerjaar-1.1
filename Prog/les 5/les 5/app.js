var read = require('readline-sync'),
    game = true,
    Player_health = 21,
    Slime_health = 21;

function A() {
    console.log("je komt een slijm tegen");

    while (game == true) {
        console.log("je hebt " + Player_health + " HP");
        B = read.question("Wat ga je doen ? (Vechten of vluchten ?)");

        switch (B) {
            case "Vechten":
            case "vechten":
                damagde_to_player = Math.floor(Math.random() * 8);
                damagde_to_slime = Math.floor(Math.random() * 8);

                Player_health = Player_health - damagde_to_player;
                Slime_health = Slime_health - damagde_to_slime;

                console.log("Squall zwaait zijn zwaard en doet " + damagde_to_slime + " schade.");
                console.log("Slijm valt aan en doet " + damagde_to_player + " schade.");
                break;
            case "Vluchten":
            case "vluchten":
                console.log("Squall rent weg van de Slijm.");
                game = false;
                break;
        }

        if (Player_health <= 0) {
            console.log("je hebt dood!");
            game = false;
        }

        if (Slime_health <= 0) {
            console.log("je hebt de slime vermoort");
            game = false;
        }
    }
}

A();