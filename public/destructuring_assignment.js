//array

const coba = [1, 2, 3];

const [a, b, c, d] = coba;

console.log(a);
console.log(b);
console.log(c);

//pengulangan

const bendaPadat = ['Besi', 'Batu', 'Kayu'];

const [brg1, brg2, brg3] = bendaPadat;
console.log(brg1);
console.log(brg2);
console.log(brg3);

//object

const obj = {
    nama: 'sigit',
    umur: 33,
    codeNumber: 144
}

const {nama, umur, codeNumber} = obj; //nama variable harus sama dengan property nya

console.log(nama);
console.log(umur);
console.log(codeNumber);

//pengulangan

const obj2 = {
    poke: 'Darkray',
    type: 'Dark'
}

const {poke, type} = obj2;

console.log(poke);
console.log(type);


//Skipping Items

const names = ['Sigit', 'Primal', 'Requillem', 'Nouveau',];

const [char1, char2, , char4] = names; //char3 di skip dengan tidak menuliskannya di variable

console.log(char1);
console.log(char2);
// console.log(char3);
console.log(char4);


//Swapping Items

let fire = 'fire';
let water = 'water';

[fire, water] = [water, fire];

console.log(fire); //water
console.log(water); //fire


//Return value pada function

function desct() {
    return ['hand', 'duck'];
}

const [item1, item2] = desct();

console.log(item1);
console.log(item2);

//Penggunaan Rest Parameter pada Destructuring Assignment

const characters = ['Onyx', 'Kor', 'Nix', 'Jhala',];

const [...character] = characters

console.log(character);
console.log(character[1]);

function callAllChars() {
    for(let i = 0; i < characters.length; i++){
        console.log(characters[i]);
    }
}

callAllChars();

//Pengulangan
 const pokemons = ['Arcues', 'Giratina', 'Groudon', 'Rayquaza'];
 const [...pokemon] = pokemons

 function chatchingPokemon() {
    for(let i = 0; i < pokemons.length; i++) {
        console.log(`Chatching ${pokemons[i]}`);
    }
}

chatchingPokemon();




//Destructuring pada object tanpa deklarasi object
({pedang, tameng} = {pedang: 'sword', tameng: 'shield'})

console.log(pedang);
console.log(tameng);


//Assign object ke variable baru

const power = {
    str: 5,
    dex: 4,
    def: 8,
    spd: 5
}

const {str: kekuatan, dex: ketangkasan, def: ketahanan, spd: kecepatan} = power

console.log(kekuatan);


//Memberikan nilai default pada object pada destructuring object

const angka = {
    ganjil: [1, 3, 5, 7, 9],
    genap: [2, 4, 6, 8, 10],
    prima: [2, 3, 5, 7, 11]
}

const {ganjil, komposit = [4, 6, 8, 9, 10] , ...bilangan } = angka; //menggunakan rest parameter

console.log(komposit);
console.log(bilangan);

//Mengambil filed pada object setelah di assign sebagai parameter untuk function

function genapOnly({genap}) {
    return genap;
}

function ganjilOnly({ganjil}) {
    return ganjil;
}

function primaOnly({prima}) {
    return prima;
}

console.log(genapOnly(angka));
console.log(ganjilOnly(angka));
console.log(primaOnly(angka));



const pokeLists = {
    fire: ['Charmender', 'Charizard', 'Blaziken', 'Growlite', 'Incineroar'],
    grass: ['Bulbasaur', 'Venusaur', 'Leafeon', 'Snivy', 'Chesnaught'],
    water: ['Squirtle', 'Vaporeon', 'Gyarados', 'Popplio', 'Lapras']
}

function fireOnly({fire}) {
    return fire;
}


function waterOnly({water}){
    return water;
}

function grassOnly({grass}){
    for (let i = 0; i < grass.length; i++) {
        console.log(`Pokemon type grass: ${grass[i]}`);
    };
}

console.log(fireOnly(pokeLists));
console.log(waterOnly(pokeLists));
console.log(grassOnly(pokeLists));

