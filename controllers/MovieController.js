const movieModdel = require('../models/Movie');
PATHVIEW = "../views/Movie/";

let listMovies = [
    new movieModdel(1, "Peli1", 2018, "Drama", 120, "Director1"),
    new movieModdel(2, "Peli2", 2019, "Terror", 100, "Director2"),
    new movieModdel(3, "Peli3", 2020, "Ficcion", 80, "Director3"),
    new movieModdel(4, "Peli4", 2021, "Amor", 120, "Director4"),
    new movieModdel(5, "Peli5", 2022, "Comedia", 150, "Director5"),
    new movieModdel(6, "Peli6", 2023, "Anime", 100, "Director6")
];

// GET
function getMovies(req, res) {
    res.render(`${PATHVIEW}getMovies.ejs`, {
        listMovies
    })
}

// GET
function editMoviesGet(req, res) {
    let {id} = req.params;
    res.render(`${PATHVIEW}editMovies.ejs`, {
        ...listMovies[id-1],
        error: false
    })
}

// POST
function editMoviesPost(req, res) {
    let {id} = req.params;
    let updateMovie = {...arguments} = req.body;
    updateMovie._id = id;
    
    listMovies[id-1] = updateMovie;
    res.redirect('/movie');
}

// GET
function deleteMovieGet(req, res) {
    let {id} = req.params;
    res.render(`${PATHVIEW}deleteMovies.ejs`, {
        ...listMovies[id-1],
        error: false
    })
}

// POST
function deleteMoviePost(req, res) {
    let {id} = req.params;
    delete listMovies[id-1];

    res.redirect('/movie');
}

module.exports = { getMovies, editMoviesGet, editMoviesPost, deleteMovieGet, deleteMoviePost}