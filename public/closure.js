// Closure 

function init() {
    // let nama = "sigit";
    function tampilNama(nama) {
        console.log(nama);
    }
    return tampilNama;
}
let palnggilNama = init();
palnggilNama('Sigit');

function init() {
    function tampilNama(nama) {
        console.log(nama);
    }
    return tampilNama;
}
let manggilNama = init();
manggilNama("Aji Primal"); 