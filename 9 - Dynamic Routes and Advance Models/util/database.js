const mysql = require ('mysql2');

const pool = mysql.createPool({
    host : 'localhost',
    user : 'root',
    database : 'node-complete',
    password : 'x-A3Mxd24YmW8dA'
});

module.exports = pool.promise();