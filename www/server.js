const express = require('express');
const MovieRouter = require('../routes/Movie/index.js');

const server = express();

// Add configs
server.set("PORT", 3000);
server.set('view engine', 'ejs');

// Add middlewares
server.use(express.static('./public'));

// Add Pages
server.use('/movie', MovieRouter);

module.exports = server;