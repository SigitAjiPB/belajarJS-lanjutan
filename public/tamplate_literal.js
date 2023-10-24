// const { Result } = require("postcss");

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

const nama = 'Sigit Aji Primal';
const umur = 13;
const email = 'sigitanjrith@ggmaild.com';

function coba(strings, ...values) {
    return strings.reduce((result, str, i) => `${result}${str}<span class="hl">${values[i] || ''}</span>`, '' );
}


const str = coba`Hallo my name is ${nama}, i am ${umur} years old. Contact me by ${email}`;
document.body.innerHTML = str;

