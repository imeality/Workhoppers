  var mysql = require('mysql');
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Imeality@123',
    database: 'test'
});

connection.connect(function(err) {
    if (err) throw err;
});

module.exports = connection; 

