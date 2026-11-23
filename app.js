
const express = require("express");

const app = express();

const PORT = 3000;

// Middleware untuk membaca JSON
app.use(express.json());

// Menghubungkan routes peminjaman
const peminjamanRoutes = require(
    "./routes/peminjamanRoutes"
);

app.use("/api/peminjaman", peminjamanRoutes);

// Halaman utama API
app.get("/", (req, res) => {
    res.json({
        success: true,
        message: "API Sistem Peminjaman Barang Berjalan"
    });
});

// Menjalankan server
app.listen(PORT, () => {
    console.log(
        `Server berjalan di http://localhost:${PORT}`
    );
});
