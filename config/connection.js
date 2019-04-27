var mysql = require('mysql');

var connection;

connection = mysql.createConnection({
	port: 3306,
	host: 'localhost',
	user: 'root',
	password: 'My1831my.',
	database: 'burgers_db'
});

if (process.env.JAWSDB_URL){
	connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
	connection = mysql.createConnection({
		port: 3306,
		host: 'localhost',
		user: 'root',
		password: 'My1831my.',
		database: 'burgers_db'
	});	
};

connection.connect(function (err) {
	if (err) {
		console.error('ERROR:' + err.stack);
		return;
	}
	console.log('Connected as ID:' + connection.threadId);
});

module.exports = connection;
