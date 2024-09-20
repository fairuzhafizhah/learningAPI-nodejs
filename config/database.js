//first

const { Sequelize, DataTypes } = require('sequelize');

const sequelizeInstance = new Sequelize(
    "test-student",      // nama database
    "postgres",   // nama user
    "12345",     // password
    {
        host: "localhost",
        port: 5432,
        dialect: "postgres" // harus "postgres"
    }
);

const student = sequelizeInstance.define(
    "pengguna", 
    {
        nama: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        tanggal_lahir: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        alamat: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
    },
    {
        tableName: "pengguna", //nama tabel yang dituju
        timestamps: true,
    }
);

module.exports = { sequelizeInstance, student };