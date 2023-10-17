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



const box = document.getElementById("box");

box.addEventListener("click", function() {
    box.classList.toggle(``);
});