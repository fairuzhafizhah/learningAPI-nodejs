//third

const { student } = require('../config/database.js');
const modelStu = require('../model/studentmodel.js');

// Fungsi untuk membaca semua todo
exports.readAllstu = async (_, res) => {
    try {
        const todoo = await modelStu.readAllstu();
        res.status(200).json(todoo); // Mengirim respons dengan status 200 (OK) dan data todo
    } catch (error) {
        res.status(500).json({ error: error.message }); // Mengirim respons error dengan status 500
    }
};

// Fungsi untuk membaca todo berdasarkan ID
exports.readStu = async (req, res) => {
    try {
        const student = await modelStu.readStu(req.params.id);
        if (student) {
            res.status(200).json(student); // Jika ditemukan, kirim data dengan status 200
        } else {
            res.status(404).json({ message: "Todo not found" }); // Jika tidak ditemukan, kirim status 404
        }
    } catch (error) {
        res.status(500).json({ error: error.message }); // Mengirim error dengan status 500
    }
};

// Fungsi untuk membuat todo baru
exports.createStu = async (req, res) => {
    try {
        const newStu = await modelStu.createStu(req.body);
        res.status(201).json(newStu); // Mengirim respons dengan status 201 (Created)
    } catch (error) {
        res.status(500).json({ error: error.message }); // Mengirim error dengan status 500
    }
};

// Fungsi untuk mengupdate todo berdasarkan ID
exports.updateStu = async (req, res) => {
    try {
        const updatedStu = await modelStu.updateStu(req.params.id, req.body);
        if (updatedStu) {
            res.status(200).json({ message: "Student Data updated successfully" }); // Kirim status 200 jika update berhasil
        } else {
            res.status(404).json({ message: "Student Data not found" }); // Jika tidak ditemukan, kirim status 404
        }
    } catch (error) {
        res.status(500).json({ error: error.message }); // Mengirim error dengan status 500
    }
};

// Fungsi untuk menghapus todo berdasarkan ID
exports.deleteStu = async (req, res) => {
    try {
        const deletedStu = await modelStu.deleteStu(req.params.id);
        if (deletedStu) {
            res.status(200).json({ message: "Student Data deleted successfully" }); // Kirim status 200 jika delete berhasil
        } else {
            res.status(404).json({ message: "Data not found" }); // Jika tidak ditemukan, kirim status 404
        }
    } catch (error) {
        res.status(500).json({ error: error.message }); // Mengirim error dengan status 500
    }
};