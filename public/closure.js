// Closure 

// function init() {
//     // let nama = "sigit";
//     function tampilNama(nama) {
//         console.log(nama);
//     }
//     return tampilNama;
// }
// let palnggilNama = init();
// palnggilNama('Sigit');

// function init() {
//     function tampilNama(nama) {
//         console.log(nama);
//     }
//     return tampilNama;
// }
// let manggilNama = init();
// manggilNama("Aji Primal"); 





// counter menggunakan closure
// menggunakan immediately invoke function (menjalankan inner function tanpa harus membuat variable atau penampungnya)


let add = (function() {
    let counter = 0;
    return function() {
        
        return ++counter;
    }
})();

console.log(add());
console.log(add());
console.log(add());
console.log(add());
console.log(add());
console.log(add());
console.log(add());
