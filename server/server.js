const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const passport = require('passport');

const sensors = require('./routes/api/sensors');
const users = require('./routes/api/users');
const app = express();
const server = require('http').createServer(app);

const port = process.env.PORT || 5000;

var io = require('socket.io').listen(server);
const SOCKET_LIST = [];
io.sockets.on('connection', (socket) => {
    SOCKET_LIST.push(socket);
    console.log('user connected!');
    socket.emit('message', 'Welcome to skwirrel connected appartment!')
    socket.on('message', (msg) => console.log('message from the client', msg));
        for (let i in SOCKET_LIST) {
            SOCKET_LIST[i].emit('message', 'new user');
        }
});

// Body parser middleware
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

// DB Config
const db = require('./config/keys').mongoURI;

// Connect to MongoDB
mongoose
.connect(db)
.then(() => console.log('MongoDB connected'))
.catch(err => console.log(err));

// Passport middleware
app.use(passport.initialize());

// Passport Config
require('./config/passport.js')(passport);

// use Routes
app.use('/api/users', users);

// Middleware for allowing api calls
app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});
app.use('/api/sensor', sensors);

server.listen(port, () => { console.log(`Server is running on port : ${port}`)});