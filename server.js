var express = require('express');
var bodyParser = require('body-parser');
var exphbs = require('express-handlebars');
var method_override = require('method-override');

var port = process.env.PORT || 8080;

var app = express();
app.use(express.static(process.cwd() + '/public'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(method_override('_method'));
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

var routes = require('./controllers/burgers_controller.js');

app.use('/', routes);

app.listen(port);
