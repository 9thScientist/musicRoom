var express = require('express');
var app = express();
var http= require('http').Server(app);
var io = require('socket.io')(http);
var bodyParser = require('body-parser');
var session = require('express-session');

var urlencodedParser = bodyParser.urlencoded({extended: true});

app.use(urlencodedParser);
app.use(cookieParser());
app.use(express.session({secret: '140e9masO85saiu!'}))

app.use(express.static(__dirname));
app.set('view engine', 'ejs');

var onUsers = ["Joana", "Jorge"];
var usersID = {}; 
var username;
var userSID;


app.get('/', function(req, res) {
	res.sendFile(__dirname + '/views/pages/index.html');
});

app.post('/login', function(req, res) {
	username = req.body.username;
	onUsers.push(username);

	res.render ('pages/main', {onUsers});

});

io.on('connection', function(socket) {
	console.log(username + ' user connected.');
	userSID = socket.id;
	usersID[socket.id] = username;

	socket.on('disconnect', function() {
		var ind = onUsers.indexOf(usersID[socket.id]);
		username = onUsers.splice(ind, 1);
		console.log(username + ' disconnected.');
		delete usersID[socket.id];
	});
});

http.listen(3000, function() {
	console.log('Connected on port 3000.');
});
