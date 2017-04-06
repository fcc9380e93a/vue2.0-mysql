var mysql = require('mysql');

var pool = mysql.createPool({
    host: '192.168.30.77',
    user: 'chenlong',
    password: '123456',
    database: 'foods',
    connectionLimit: 10
});



function queryDB(callback) {
    pool.getConnection((err, connection) => {
        if (err) {
            callback(null, err);
        } else {
            callback(connection, null);
        }
    });
}

exports.queryDB=queryDB;
