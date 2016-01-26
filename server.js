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
var usersID = {}; 

app.get('/', function(req, res) {
	res.sendFile('views/pages/index.html', {root: __dirname});
});

app.post('/login', function(req, res) {
	var username = req.body.username;

	onUsers.push(username);
	res.render ('pages/main', {onUsers});

	io.on('connection', function(socket) {
		console.log(username + ' user connected.');
		usersID[socket.id] = username;

		socket.on('disconnect', function() {
			var ind = onUsers.indexOf(usersID[socket.id]);
			username = onUsers.splice(ind, 1);
			console.log(username + ' disconnected.');
			delete usersID[socket.id];
		});
	});
});


http.listen(3000, function() {
	console.log('Connected on port 3000.');
});
