// function penjumlahanPerkalian(a, b) {
//     return [a + b, a * b];
// }

// const jumlah = penjumlahanPerkalian(2, 4);
// console.log(jumlah);

// function perkalianPenjumlahan(a, b) {
//     return [a + b, a * b];
// }

// const [penjumlahan, perkalian] = perkalianPenjumlahan(12, 12);

// console.log(penjumlahan);
// console.log(perkalian);





//Cara agar destructuring tidak berpengaruh pada urutannya dengan menggunakan object

function kalkulasi(a, b) {
    return {
        tambah: a + b,
        kurang: a - b,
        kali: a * b,
        bagi: a / b
    }
}

const {bagi, kali, tambah, kurang} = kalkulasi(45, 54);

console.log(tambah); 




const characterWater = {
    nama: 'Sigit',
    senjata: 'Cannon',
    id: 11901238
}

const characterFire = {
    nama: 'Requillem',
    senjata: 'spear',
    id: 119034821
}

const characterGrass = {
    nama: 'Kung Lao',
    senjata: 'Gauntlets',
    id: 119023879
}

function chrWater({nama, senjata}) {
    return `Hallo my name is ${nama}, my weapon is ${senjata}`;
}

function chrFire({nama, senjata}) {
    return `Hallo my name is ${nama}, my weapon is ${senjata}`;
}

function chrGrass({nama, senjata}) {
    return `Hallo my name is ${nama}, my weapon is ${senjata}`;
}

console.log(chrWater(characterWater));

console.log(chrFire(characterFire));

console.log(chrGrass(characterGrass));