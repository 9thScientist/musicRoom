var express = require('express');
var app = express();
var http= require('http').Server(app);
var io = require('socket.io')(http);
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');

var urlencodedParser = bodyParser.urlencoded({extended: true});

app.use(urlencodedParser);
app.use(cookieParser());

app.use(express.static(__dirname));
app.set('view engine', 'ejs');

var onUsers = ["Joana", "Jorge"];
var usersID = {}; 
var username;
var userSID;


app.get('/', function(req, res) {

	console.log (req.cookies.session);

	if (req.cookies.length != undefined) res.render
	else res.sendFile('views/pages/index.html', {root: __dirname});

});

app.post('/login', function(req, res) {
	username = req.body.username;
	onUsers.push(username);

	res.setHeader('Set-Cookie', ['session=' + userSID]);
	res.render ('pages/main', {onUsers});

});

io.on('connection', function(socket) {
	console.log(username + ' user connected.');
	userSID = socket.id;
	usersID[socket.id] = username;

/*
	app.get('/cookie', function(req, res) {
		res.cookie(cookie_name, userSID);
	});
*/

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
