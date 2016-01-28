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

var session;

app.get('/', function(req, res) {
	session = req.session;

	if (session.username)
		res.render('pages/main', {onUsers});
	else
		res.sendFile(__dirname + '/views/pages/index.html');
});

app.post('/login', function(req, res) {
	session = req.session;

	if (!session.username){
		session.username = req.body.username;
		//onUsers.push(session.username);
	}
	
	res.render ('pages/main', {onUsers});
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
	var repeat = isOnline(session.username);
	usersID[socket.id] = session.username;

	console.log ('Checking if ' + session.username + ' is already logged in...');

	if (!repeat) { 
		console.log(session.username + ' user connected.');
		onUsers.push(session.username);
	}
	
	console.log ('onUsers: ' + onUsers);

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
