const x = 10;
console.log(`${x % 2 === 0 ? `genap` : `ganjil`}`);

const mahasiswa = [
    {
    nama: 'Sigit',
    nrp: 12990129
    },
    {
        nama:'Primal',
        nrp: 9872345
    },
    {
        nama:'Beast',
        nrp: 9834773
    }

];

const el = `<div class="mhs">
    ${mahasiswa.map(m =>`<ul>
    <li>${m.nama}</li>
    <li>${m.nrp}</li>
    </ul>`).join('')}
    </div>`

    document.body.innerHTML = el


//Conditional, (Ternary)

const lagu = [
    {
        judul: 'Tari Poco-Poco',
        penyanyi: 'Si Mamang',
    },
    {
        judul:'Catatan Akhir Sekolah',
        penyanyi: 'Erik Susano',
        feat: 'RX-78-RH'
    }
]

// const lel = `<div class=lagu">
//     <ul>
//         <li>Penyanyi: ${lagu.penyanyi}</li>
//         <li>Judul: ${lagu.judul} ${lagu.feat ? `(feat: ${lagu.feat})`: ''}</li>
//     </ul>
// </div>`;

const lul = `<div class ="lagu">
    ${lagu.map(m => 
    `<ul>
        <li>Penyanyi: ${m.penyanyi}</li>
        <li>Judul: ${m.judul} ${m.feat ? `(feat: ${m.feat})`: ''}</li>
    </ul>`
    )}


</div>`

document.body.innerHTML = lul
