const daftarKaryawan = [
    {
        nama: "Devyn Ramirez",
        masaKerja:  10,
        noInduk: "1",
        gajiKaryawan: "Rp 7.000.000",
    },
    {
        nama: "Harmony Duncan",
        masaKerja:  5,
        noInduk: "2",
        gajiKaryawan: "Rp 4.000.000",
    },
    {
        nama: "Clarissa Burgess",
        masaKerja: 8,
        noInduk: "3",
        gajiKaryawan: "Rp 7.000.000",
    },
    {
        nama: "Reilly Blanchard",
        masaKerja:  7,
        noInduk: "4",
        gajiKaryawan: "Rp 7.000.000",
    },
    {
        nama: "Zion Brooks",
        masaKerja:  4,
        noInduk: "5",
        gajiKaryawan: "Rp 4.000.000",
    },
    {
        nama: "Jovanny Mays",
        masaKerja: 10,
        noInduk: "6",
        gajiKaryawan: "Rp 7.000.000",
    },
    {
        nama: "Cindy Chase",
        masaKerja: 9,
        noInduk: "7",
        gajiKaryawan: "Rp 7.000.000",
    },
    {
        nama: "Kristin Mcdaniel",
        masaKerja: 8,
        noInduk: "8",
        gajiKaryawan: "Rp 7.000.000",
    },
    {
        nama: "Macey Sanford",
        masaKerja: 7,
        noInduk: "9",
        gajiKaryawan: "Rp 7.000.000",
    },
    {
        nama: "Alfredo Faulkner",
        masaKerja: 10,
        noInduk: "10",
        gajiKaryawan: "Rp 7.000.000",
    },
]
let mode = 'tambah'

// READ

const tampilkanKaryawan = () => {
    const tblKaryawan = document.getElementById(`tblKaryawan`)
    tblKaryawan.innerHTML = "<tr><th>No</th><th>Nama</th><th>Masa Kerja</th><th>No Induk</th><th>Gaji Karyawan</th><th>Delete</th><th>Edit</th></tr>"

        for(let idx in daftarKaryawan) {
         console.log(`${parseInt(idx) + 1}. ${daftarKaryawan[idx].nama} Masa kerjanya ${daftarKaryawan[idx].masaKerja} No Induknya ${daftarKaryawan[idx].noInduk} Gajinya ${daftarKaryawan[idx].gajiKaryawan}`);

         tblKaryawan.innerHTML += `<tr><td>${parseInt(idx) + 1}</td><td>${daftarKaryawan[idx].nama}</td><td>${daftarKaryawan[idx].masaKerja}</td><td>${daftarKaryawan[idx].noInduk}</td><td>${daftarKaryawan[idx].gajiKaryawan}</td><td><button class="btn btn-danger" onclick="hapusKaryawan('${daftarKaryawan[idx].nama}')">Delete</button></td><td><button class="btn btn-warning" onclick="editKaryawan('${daftarKaryawan[idx].nama}')">Edit</button></td></tr>`
        

}
}

// CREATE
 const tambahKaryawan = () => {
    const nama = document.getElementById('txtNama').value
    const masaKerja = document.getElementById('txtMasker').value
    const noInduk = document.getElementById('txtNoinduk').value
    const gajiKaryawan = document.getElementById('txtGakar').value

     const KaryawanBaru = {
        nama: nama,
        masaKerja: masaKerja,
        noInduk: noInduk,
        gajiKaryawan: gajiKaryawan,
    }

    // jika tambah

    if (mode == 'tambah') {
        daftarKaryawan.push(KaryawanBaru)
    } else {
        // jika edit
        daftarKaryawan[mode] = KaryawanBaru
    }

    document.getElementById('txtNama').value = ""
    document.getElementById('txtMasker').value = ""
    document.getElementById('txtNoinduk').value = ""
    document.getElementById('txtGakar').value = ""

    tampilkanKaryawan()
    
 }

const cariIndex = (nama) => { 
    for (let i =0; i< daftarKaryawan.length; i++) {
        if (daftarKaryawan[i].nama == nama) {
           return i
        }
    }
    
}

// DELETE

const hapusKaryawan = (target) => {
    const indexDihapus = cariIndex(target)
    // menghapus Karyawan
    if (indexDihapus !== -1) {
        daftarKaryawan.splice(indexDihapus, 1)  
        tampilkanKaryawan();
    }

}

// EDIT 
const editKaryawan = (target) => { 
    const indexEdit = cariIndex(target)

    console.log(target)
    console.log(indexEdit)
    console.log(daftarKaryawan[indexEdit])

    const KaryawanDiedit = daftarKaryawan[indexEdit]

    document.getElementById('txtNama').value = KaryawanDiedit.nama
    document.getElementById('txtMasker').value = KaryawanDiedit.masaKerja
    document.getElementById('txtNoinduk').value = KaryawanDiedit.noInduk
    document.getElementById('txtGakar').value = KaryawanDiedit.gajiKaryawan

    mode = indexEdit

}
const batalEdit = (target) => {
    document.getElementById('txtNama').value = ""
    document.getElementById('txtMasker').value = ""
    document.getElementById('txtNoinduk').value = ""
    document.getElementById('txtGakar').value = ""
    mode = 'tambah'

}