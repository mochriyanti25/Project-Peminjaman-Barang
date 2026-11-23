//Milik Moch Riyan Fauzi
const Peminjaman = require("../models/peminjamanModel");

// Menampilkan seluruh data
const getAll = (req, res) => {
    const data = Peminjaman.getAll();

    res.json({
        success: true,
        message: "Berhasil menampilkan seluruh data peminjaman",
        data: data
    });
};

// Menampilkan detail berdasarkan ID
const getById = (req, res) => {
    const data = Peminjaman.getById(req.params.id);

    if (!data) {
        return res.status(404).json({
            success: false,
            message: "Data peminjaman tidak ditemukan"
        });
    }

    res.json({
        success: true,
        message: "Detail data berhasil ditemukan",
        data: data
    });
};

// Menambahkan data
const create = (req, res) => {
    const {
        namaPeminjam,
        namaBarang,
        jumlah,
        tanggalPinjam,
        tanggalKembali,
        status
    } = req.body;

    if (
        !namaPeminjam ||
        !namaBarang ||
        jumlah === undefined ||
        !tanggalPinjam ||
        !tanggalKembali ||
        !status
    ) {
        return res.status(400).json({
            success: false,
            message: "Semua data wajib diisi"
        });
    }

    if (
        typeof namaPeminjam !== "string" ||
        typeof namaBarang !== "string" ||
        typeof jumlah !== "number" ||
        !Number.isInteger(jumlah) ||
        jumlah <= 0 ||
        !["Dipinjam", "Dikembalikan"].includes(status)
    ) {
        return res.status(400).json({
            success: false,
            message: "Format atau nilai data tidak valid"
        });
    }

    const dataBaru = Peminjaman.create({
        namaPeminjam,
        namaBarang,
        jumlah,
        tanggalPinjam,
        tanggalKembali,
        status
    });

    res.status(201).json({
        success: true,
        message: "Data peminjaman berhasil ditambahkan",
        data: dataBaru
    });
};

// Mengubah data
const update = (req, res) => {
    const {
        namaPeminjam,
        namaBarang,
        jumlah,
        tanggalPinjam,
        tanggalKembali,
        status
    } = req.body;

    if (
        !namaPeminjam ||
        !namaBarang ||
        jumlah === undefined ||
        !tanggalPinjam ||
        !tanggalKembali ||
        !status
    ) {
        return res.status(400).json({
            success: false,
            message: "Semua data wajib diisi"
        });
    }

    if (
        typeof namaPeminjam !== "string" ||
        typeof namaBarang !== "string" ||
        typeof jumlah !== "number" ||
        !Number.isInteger(jumlah) ||
        jumlah <= 0 ||
        !["Dipinjam", "Dikembalikan"].includes(status)
    ) {
        return res.status(400).json({
            success: false,
            message: "Format atau nilai data tidak valid"
        });
    }

    const dataDiubah = Peminjaman.update(
        req.params.id,
        {
            namaPeminjam,
            namaBarang,
            jumlah,
            tanggalPinjam,
            tanggalKembali,
            status
        }
    );

    if (!dataDiubah) {
        return res.status(404).json({
            success: false,
            message: "Data peminjaman tidak ditemukan"
        });
    }

    res.json({
        success: true,
        message: "Data peminjaman berhasil diperbarui",
        data: dataDiubah
    });
};

// Menghapus data
const remove = (req, res) => {
    const dataDihapus = Peminjaman.remove(req.params.id);

    if (!dataDihapus) {
        return res.status(404).json({
            success: false,
            message: "Data peminjaman tidak ditemukan"
        });
    }

    res.json({
        success: true,
        message: "Data peminjaman berhasil dihapus",
        data: dataDihapus
    });
};

module.exports = {
    getAll,
    getById,
    create,
    update,
    remove
};
