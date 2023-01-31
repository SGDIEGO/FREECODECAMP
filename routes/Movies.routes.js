const express = require('express');
const { getMovies, editMoviesGet, editMoviesPost, deleteMovieGet, deleteMoviePost} = require('../controllers/MovieController.js');

var router = express.Router();

router.get('/', getMovies);

router.get('/edit/:id', editMoviesGet);
router.post('/edit/:id', editMoviesPost);

router.get('/delete/:id', deleteMovieGet);
router.post('/delete/:id', deleteMoviePost);

module.exports = router;