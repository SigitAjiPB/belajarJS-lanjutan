// mencoba menggunakan arrow function

// Mencari jumlah karakter angka pada array nama
// let character = ["Sigit", "aji", "Primalbeast"];

// let jumlahHuruf = character.map(nama => nama.length );
// console.log(jumlahHuruf);

// Mengubah array menjadi object dengan menggunakan arrow function
// let jumlahHuruf = character.map(nama => ({
//     nama: nama,
//     jmlHuruf: nama.length
// }));

// console.table(jumlahHuruf);




// arrow function (tidak memiliki konsep "this")
// memnambahkan umur setiap 1 detik

// const Character = function() {
//     this.nama = "Sigit";
//     this.umur = 33;

//     this.sayHallo = function() {
//         console.log(`Hallo nama saya ${this.nama}, saya ${this.umur} tahun`);
//     }

//     // setInterval(()=> {
//     //     console.log(this.umur++)
//     // },1000);
// };

// const Sigit = new Character();



// const box = document.getElementById("box");

// box.addEventListener("click", function() {
//     box.classList.toggle(``);
// });

// const app = document.getElementById("app");

// app.innerHTML = `<h1> Belajar Reac Bareng WPU</h1>`
// body.appendChild('app');






// HIGHER ORDER FUNCTIONS

// for (let i = 0; i < 10 ; i++) {
//     console.log(i);
// }

// // menggunakan function untuk membuat pengulangan lebih dinamis

// function repeatLog(n) {
//     for (let i = 0 ; i < n ; i++) {
//         console.log(i);
//     }
// }

// repeatLog(30);

// menggunakan Higher order function untuk membuat pengulangan lebih flexible dan dinamis

function repeatLog(n, action) {
    for (let i = 0; i < n; i++) {
        action(i);
    }
}

repeatLog(1, alert);
repeatLog(11, console.log);
