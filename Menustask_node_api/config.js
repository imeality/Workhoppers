var mysql = require('mysql');
var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Imeality@123',
  database: 'Menustask'
});

connection.connect(function(err) {
  if (err) throw err;
});

module.exports = connection;
