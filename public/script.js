//Obj Literal

// let mahasiswa = {
//     nama : 'Sigit',
//     energi : 12,
//     makan: function(porsi) {
//         this.energi = this.energi + porsi;
//         console.log(`Halo ${this.nama}, total energi mu sekarang ${this.energi}`);
//     }

// }





//Obj Function Declaration

// const methodeMahasiswa = {

//     makan: function (porsi) {
//         this.energi = this.energi + porsi;
//         console.log(`Halo ${this.nama}, energi mu bertambah ${porsi}, total energi mu = ${this.energi}`);

//     },

//     gelud: function(jam) {
//         this.energi -= jam;
//         console.log(`Energi mu berkurang ${jam}, total energi mu sekarang ${this.energi}`);
//     }
// }

// function Mahasiswa(nama, energi) {
//     let mahasiswa = Object.create(methodeMahasiswa); 
//     mahasiswa.nama = nama;
//     mahasiswa.energi = energi;

//     return mahasiswa;
// }

// let Sigit = Mahasiswa("Sigit", 30);



// Mengubah function declaration => constructor function
function Mahasiswa(nama, energi, uang, makanan) {
    // let mahasiswa = Object.create(methodeMahasiswa); 
    this.nama = nama;
    this.energi = energi;
    this.uang = uang;
    this.makanan = makanan;

    // return mahasiswa;
}

Mahasiswa.prototype.makan = function(porsi) {
    this.energi += porsi * 3;
    this.makanan -= porsi;
    console.log(`Halo ${this.nama}, kamu memperoleh energi sebesar ${porsi * 3}. Total energi mu sekarang ${this.energi}`);
}

Mahasiswa.prototype.gelud = function(terkuras) {
    this.energi -= terkuras * 5;
    this.uang += terkuras + terkuras * 3;

    console.log(`Halo ${this.nama}, energi mu terkuras sebanyak ${terkuras}. Energi mu sekarang adalah ${this.energi}, uang mu bertambah menjadi ${this.uang}`);
}

Mahasiswa.prototype.topUp = function(bayar) {
    this.uang -= bayar;
    this.makanan += bayar * 1;

    console.log(`Halo ${this.nama}, kamu telah membeli makanan sebanyak ${bayar}. Sisa uang mu sebanyak ${this.uang}`);
}

let Sigit = new Mahasiswa("Sigit", 50, 200, 0);








// Constructor function (Keyword "New")

// function Mahasiswa(name, energy) {
//     this.name = name;
//     this.energy = energy;

//     this.makan = function(porsi) {
//         this.energy += porsi;
//         console.log(`Hallo ${this.name}, Energy mu bertambah ${porsi}, total energy mu ${this.energy}`);
//     }

//     this.gelud = function(jam) {
//         this.energy -= jam;
//         console.log(`Energy mu telah berkurang sebesar ${jam}, total energy mu sekarang ${this.energy}`);
//     }
// }

// let Sigit = new Mahasiswa("Sigit", 50);
