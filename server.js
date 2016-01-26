var express = require('express');
var app = express();
var http= require('http').Server(app);
var io = require('socket.io')(http);
var bodyParser = require('body-parser');

var urlencodedParser = bodyParser.urlencoded({extended: true});
app.use(urlencodedParser);

app.use(express.static(__dirname));
app.set('view engine', 'ejs');

var onUsers = ["Joana", "Jorge"];

app.get('/', function(req, res) {
	res.sendFile(__dirname + '/views/pages/index.html');

});

app.post('/login', function(req, res) {
	onUsers.push(req.body.username);
	res.render ('pages/main', {onUsers});
});

io.on('connection', function(socket) {
	console.log('New user connected.');
	socket.on('disconnect', function() {
		console.log('User disconnected.');
	});
});

http.listen(3000, function() {
	console.log('Connected on port 3000.');
});
