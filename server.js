var express = require('express');
var bodyParser = require('body-parser');
var app = express();

var urlencodedParser = bodyParser.urlencoded({extended: true});

app.use(urlencodedParser);
app.use(express.static(__dirname));

app.get('/', function(req, res) {
	res.sendFile('index.html', {root: __dirname});
});

app.post('/login', function(req, res) {
	res.sendFile('main.html', {root: __dirname});
	console.log (req.body.username + ' connected.');
});

app.listen(3000, function() {
	console.log('Connected on port 3000.');
});
