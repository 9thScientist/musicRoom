var express = require('express');
var app = express();
var http= require('http').Server(app);
var io = require('socket.io')(http);
var bodyParser = require('body-parser');
var session = require('express-session');


app.use(bodyParser.urlencoded({extended: true}));
app.use(session({secret: '140e9masO85saiu!',
				 resave: false,
				 saveUninitialized: false 
				}));


app.use(express.static(__dirname));
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

var onUsers = ["Joana", "Jorge"];
var usersID = {}; 

var connection;

app.get('/', function(req, res) {
	connection = req.session;

	if (isOnline(connection.username)) res.sendFile(__dirname + '/sad.jpg'); //res.render('pages/main', {onUsers});
	else res.sendFile(__dirname + '/views/pages/index.html')
});

app.get('/enter', function(req, res) {

	connection = req.session;

	res.render('pages/main', {onUsers});
});

app.post('/login', function(req, res) {
	connection = req.session;

	connection.username = req.body.username;

	console.log ("New user: " + connection.username + '\nOnline: ' + isOnline(session.username));

	if (isOnline(connection.username)) {
		console.log(connection.username + ' already logged in');
		req.session.username = undefined;
		res.redirect('/', req, res);
	} else 
		res.redirect('/enter', req, res);
});


function isOnline(username) {
	var repeat = false;

	for (var sock in usersID){
		if (usersID[sock] == username){
			repeat = true;
			break;
		}
	}

	return repeat;
}

io.on('connection', function(socket) {
	var repeat = isOnline(connection.username);
	usersID[socket.id] = connection.username;


	if (!repeat) { 	
		onUsers.push(connection.username);
		console.log(connection.username + ' user connected.');
	}
	
	socket.on('disconnect', function() {
		var username = usersID[socket.id];
		delete usersID[socket.id];
		repeat = isOnline(username);

		if (!repeat){
			var ind = onUsers.indexOf(username);
			
			onUsers.splice(ind, 1);
			console.log(username + ' disconnected.');
		}

	});
});

http.listen(3000, function() {
	console.log('Connected on port 3000.');
});
