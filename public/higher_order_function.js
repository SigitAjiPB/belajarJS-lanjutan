const angka = [-1, -3, 3, 6, -7, 1 ,9, 4, -9, 5];

// const newAngka = [];

// for (let i = 0 ; i < angka.length; i++) {
//     if (angka[i] <= 3) {
//         newAngka.push(angka[i]);
//     }
// }




// Mencari angka lebih kecil dari 3 Menggunakan filter
// const newAngka = angka.filter(function(a) {
//     return a <= 3;
// });

// contoh, menggunakan arrow Function
const newAngka = angka.filter((a) => {
    return a <= 3;
})



// mengkalikan angak 2 kali dari semula
// const doubledNumbers = angka.map(function(a) {
//     return a * 2;
// });

// Contoh, menggunakan arrow Function
const doubledNumbers = angka.map((a) => {
    return a * 2;
});



// Menjumlahkan seluruh isi angka
const addNumbers = angka.reduce((a, b)=> {
    return a + b;
});



// Method Chaining................................................................


const chaining = angka.filter((a)=> {
    return a < 3;
}).map((a)=> {
    return a * 3;
}).reduce((a, b)=> {
    return a + b;
});






