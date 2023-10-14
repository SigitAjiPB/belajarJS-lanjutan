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

// function Mahasiswa(nama, energi) {
//     let mahasiswa = {};
//     mahasiswa.nama = nama;
//     mahasiswa.energi = energi;

//     mahasiswa.makan = function (porsi) {
//         this.energi = this.energi + porsi;
//         console.log(`Halo ${this.nama}, energi mu bertambah ${porsi}, total energi mu = ${this.energi}`);

//     }

//     mahasiswa.gelud = function(jam) {
//         this.energi -= jam;
//         console.log(`Energi mu berkurang ${jam}, total energi mu sekarang ${this.energi}`);
//     }
//     return mahasiswa;
// }

// let Sigit = Mahasiswa("Sigit", 30);





// Constructor function (Keyword "New")

function Mahasiswa(name, energy) {
    this.name = name;
    this.energy = energy;

    this.makan = function(porsi) {
        this.energy += porsi;
        console.log(`Hallo ${this.name}, Energy mu bertambah ${porsi}, total energy mu ${this.energy}`);
    }

    this.gelud = function(jam) {
        this.energy -= jam;
        console.log(`Energy mu telah berkurang sebesar ${jam}, total energy mu sekarang ${this.energy}`);
    }
}

let Sigit = new Mahasiswa("Sigit", 50);
