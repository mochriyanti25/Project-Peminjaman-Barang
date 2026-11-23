//Milik Moch Riyan Fauzi
let dataPeminjaman = [
    {
        id: 1,
        namaPeminjam: "Landy Knalpot",
        namaBarang: "Laptop",
        jumlah: 1,
        tanggalPinjam: "2026-11-20",
        tanggalKembali: "2026-11-25",
        status: "Dipinjam"
    },
    {
        id: 2,
        namaPeminjam: "Sultan Macbook",
        namaBarang: "Proyektor",
        jumlah: 1,
        tanggalPinjam: "2026-11-21",
        tanggalKembali: "2026-11-26",
        status: "Dipinjam"
    }
];

let nextId = 3;

// Menampilkan seluruh data
const getAll = () => {
    return dataPeminjaman;
};

// Menampilkan data berdasarkan ID
const getById = (id) => {
    return dataPeminjaman.find(
        item => item.id === Number(id)
    );
};

// Menambahkan data baru
const create = (data) => {
    const dataBaru = {
        id: nextId++,
        ...data
    };

    dataPeminjaman.push(dataBaru);
    return dataBaru;
};

// Mengubah data
const update = (id, data) => {
    const index = dataPeminjaman.findIndex(
        item => item.id === Number(id)
    );

    if (index === -1) {
        return null;
    }

    dataPeminjaman[index] = {
        id: Number(id),
        ...data
    };

    return dataPeminjaman[index];
};

// Menghapus data
const remove = (id) => {
    const index = dataPeminjaman.findIndex(
        item => item.id === Number(id)
    );

    if (index === -1) {
        return null;
    }

    return dataPeminjaman.splice(index, 1)[0];
};

module.exports = {
    getAll,
    getById,
    create,
    update,
    remove
};
