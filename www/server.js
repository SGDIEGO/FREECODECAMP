const bodyParser = require('body-parser');
const express = require('express');
const MoviesRouter = require('../routes/Movies.routes.js');

const server = express();

// Add configs
server.set("PORT", 3000);
server.set('view engine', 'ejs');

// Add middlewares
server.use(express.static('./public'));
server.use(bodyParser.urlencoded({extended: false}));

// Add Pages
server.use('/Movie', MoviesRouter);

module.exports = server;