/* Create a business name generator by combining list of adjectives and shop name and another word


Adjectives:
Crazy 
Amazing
Fire 

Shop Name:
Engine
Foods
Garments

Another Word:
Bros
Limited
Hub



*/

//---------------------------------------------------------------------------------------------------------------------------

// ==> This loop function <==

// function greet() {

//     for (let i = 0; i < 14; i++) {
//         console.log("Hello");
//     }
// }

// greet();

//--------------------------------------------------------------------------------------------------------------------------

// function greet(name) {
//     console.log("Kaise ho " + name);
// }

// greet("Suman");
// greet("Aman");

//---------------------------------------------------------------------------------------------------------------------------

// function generator() {
//     console.log("Suman");
// }

// generator();

//---------------------------------------------------------------------------------------------------------------------------

// ==> This is what i was trying <==

// function adjectives(name) {
//     console.log(name);
// }
// adjectives("Crazy"+ name)
// adjectives(name)
// adjectives(name)

//---------------------------------------------------------------------------------------------------------------------------

function generateBusinessName() {

    let adjectives1 = "Crazy";
    let adjectives2 = "Amazing";
    let adjectives3 = "Fire";

    let shop1 = "Engine";
    let shop2 = "Foods";
    let shop3 = "Garments";

    let word1 = "Bros";
    let word2 = "Limited";
    let word3 = "Hub";

    // First adjective
    for (let i = 1; i <= 3; i++) {

        let adjective;

        if (i == 1) adjective = adjectives1; 
        else if (i == 2) adjective = adjectives2;
        else adjective = adjectives3;

        // Shop names
        for (let j = 1; j <= 3; j++) {

            let shop;

            if (j == 1) shop = shop1;
            else if (j == 2) shop = shop2;
            else shop = shop3;

            // Another words
            for (let k = 1; k <= 3; k++) {

                let word;

                if (k == 1) word = word1;
                else if (k == 2) word = word2;
                else word = word3;

                console.log(adjective + " " + shop + " " + word);

            }
        }
    }
}

generateBusinessName();
