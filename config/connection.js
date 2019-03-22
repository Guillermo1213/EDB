var mysql = require('mysql');

var connection;

var connection = mysql.createConnection({
	port: 3306,
	host: 'localhost',
	user: 'root',
	password: 'My1831my.',
	database: 'burgers_db'
});

connection.connect(function (err) {
	if (err) {
		console.error('ERROR:' + err.stack);
		return;
	}
	console.log('Connected as ID:' + connection.threadId);
});

module.exports = connection;
