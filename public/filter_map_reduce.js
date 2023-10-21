// Ambil semua element vidio
const videos = Array.from(document.querySelectorAll('[data-duration]')); //Mengubah nodelist menjadi array menggunakan "Array.from()"

// Pilih hanya yang JAVASCRIPT LANJUTAN
let categoryJsLanjutan = videos.filter(video => video.textContent.includes('JAVASCRIPT LANJUTAN')) //".includes berfungsi untuk mengetahui suatu element mengandung apa"

//Ambil data durasinya saja (menggunakan methode chaining)
.map(item => item.dataset.duration)

//mgnubah durasi menjadi detik
.map(waktu => {
    const parts = waktu.split(':') //menghilanngkan ":" agar menit dan deitk dari durasi menjadi 2 array 
    .map(part => parseFloat(part)); //Ubah durasi menjadi float
    
    return (parts[0] * 60) + parts[1];
})

// jumlahkan semua total detiknya
.reduce((total, detik) => total + detik); // "total sebagai accumulator, detik sebagai nilai awal"

//Ubah total durasi keseluruhan menjadi "Jam : Menit : Detik"

const hours = Math.floor(categoryJsLanjutan / 3600); //membuat durasi jam
categoryJsLanjutan = categoryJsLanjutan - hours * 3600;

const minutes = Math.floor(categoryJsLanjutan / 60); //membuat durasi menit

const seconds = Math.floor(categoryJsLanjutan - minutes * 60); //membuat durasi detik



// Masukan durasi ke DOM
const pDurasi = document.querySelector('.total-durasi');
pDurasi.textContent = `${hours} Jam, ${minutes} Menit, ${seconds} Detik`

//Masukan jumlah vidio ke DOM
const totalVideos = videos.filter(video => video.textContent.includes('JAVASCRIPT LANJUTAN')).length;

const ptotalVideos = document.querySelector('.jumlah-vidio');
ptotalVideos.innerHTML = `${totalVideos} Videos`














console.log(ptotalVideos);