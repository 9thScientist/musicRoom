var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var http = require('http').Server(app);

var urlencodedParser = bodyParser.urlencoded({extended: true});

var onUsers = ["Joana", "Jorge"];

app.use(urlencodedParser);
app.use(express.static(__dirname));

app.set('view engine', 'ejs');

app.get('/', function(req, res) {
	res.sendFile(__dirname + '/views/pages/index.html');

});

app.post('/login', function(req, res) {
	onUsers.push(req.body.username);
	res.render ('pages/main', {onUsers});

	console.log (req.body.username + ' connected.');
});



app.listen(3000, function() {
	console.log('Connected on port 3000.');
});
