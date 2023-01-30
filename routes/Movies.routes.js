const express = require('express');
const { getMovies, editMoviesGet, editMoviesPost } = require('../controllers/MovieController.js');

var router = express.Router();

router.get('/', getMovies);
router.get('/edit/:id', editMoviesGet);
router.post('/edit/:id', editMoviesPost);


module.exports = router;