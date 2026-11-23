
const express = require("express");

const router = express.Router();

const PeminjamanController = require(
    "../controllers/peminjamanController"
);

// Menampilkan seluruh data
router.get(
    "/",
    PeminjamanController.getAll
);

// Menampilkan detail berdasarkan ID
router.get(
    "/:id",
    PeminjamanController.getById
);

// Menambahkan data
router.post(
    "/",
    PeminjamanController.create
);

// Mengubah data
router.put(
    "/:id",
    PeminjamanController.update
);

// Menghapus data
router.delete(
    "/:id",
    PeminjamanController.remove
);

module.exports = router;
