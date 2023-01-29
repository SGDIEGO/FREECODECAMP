const express = require('express');
const { getMovies } = require('../../controllers/MovieController.js');

var router = express.Router();

router.get('/', getMovies);

module.exports = router;