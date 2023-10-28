// penggunaan for

const cannonCharacters = [
    'Onyx',
    'Lin Fei',
    'Xull',
    'Isaiah',
    'Sidra'
];

for(let i = 0; i < cannonCharacters.length; i++) {
    console.log(cannonCharacters[i]);
}


console.log('_____________Cannon.. Rawrrr') 
// characters.forEach((m) => console.log(m))
const result = cannonCharacters.forEach((m)=> console.log(m));
// console.log(result);



//Penggunaan 'for of' pada Array...

const bowCharacters =['Kaya', 'Vector', 'Ember']

console.log('______________ Bow.. Rawrrr');
for(const m of bowCharacters) {
    console.log(m);
}

//Penggunaan 'for of' pada String...

for(const m of bowCharacters[1]) {
    console.log(m);
}

//Destructuring pada "for of"...

console.log('______________');
for(const [i, c] of bowCharacters.entries()) { //penggunaan ".entries" pada variable bowCharacter
    console.log(`${c} Character ke-${i+1}`);
}


// Penggunaan "for of" pada Node List

const liCharacters = document.querySelectorAll(".character");

liCharacters.forEach((c) => {
    console.log(c.textContent);
})


//Penggunaan "for of" pada Arguments....

function addNumbers() {
    let add = 0;

    for (a of arguments) {
       add += a;
    }
    return add;
}
console.log (addNumbers(1, 2, 3, 4, 5));

function devideNumbers() {
    let firstValue = 1230;

    for (a of arguments) {
        firstValue /= a;
    }

    return firstValue;
}

console.log(devideNumbers(1, 2, 3, 4, 5));

function substarcNumbers() {
    let firstValue = 90;

    for (a of arguments) {
        firstValue -= a;
    }

    return firstValue;
}

console.log(substarcNumbers(1, 2, 3, 4, 5));

//Penggunaan "For In" pada Object................................................................

const character = {
    name: 'Onyx',
    weapons: ['Cannnon', 'Gauntlets'],
    id: 19083747
}

for( i in character) {
    console.log(character[i]);
}

class Character {
    constructor(name, weapons, id) {
        this.name = name;
        this.weapons = weapons
        this.id = id;
    }

    sayHi() {
        console.log(`Hello my name is ${this.name}, my weapons are ${this.weapons.join(' & ')}`);
    }
}

let char1 = new Character("Onyx", ["Cannon", "Gaunlets"], 1903840);
let char2 = new Character("Lin Fei", ["Cannon", "Catars"], 1907721);

char1.sayHi();
char2.sayHi();