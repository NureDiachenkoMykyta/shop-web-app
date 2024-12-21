const sql = require("mssql");

const config = {
    user: "admin",
    password: "admin",
    server: "localhost",
    database: "Shop",
    options: {
        encrypt: true, 
        trustServerCertificate: true, 
    },
};

module.exports = config;
