const movieModdel = require('../models/Movie');
PATHVIEW = "../views/Movie/";

let listMovies = [
    new movieModdel("Peli1", 2018, "Drama", 120, "Director1"),
    new movieModdel("Peli2", 2019, "Terror", 100, "Director2"),
    new movieModdel("Peli3", 2020, "Ficcion", 80, "Director3"),
    new movieModdel("Peli4", 2021, "Amor", 120, "Director4"),
    new movieModdel("Peli5", 2022, "Comedia", 150, "Director5"),
    new movieModdel("Peli6", 2023, "Anime", 100, "Director6")
]


function getMovies(req, res) {
    res.render(`${PATHVIEW}index.ejs`, {
        movies: listMovies
    })
}

module.exports = { getMovies }