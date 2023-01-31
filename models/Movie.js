class Movie {
    id
    name
    createdOn
    gener
    time
    director

    constructor(id, name, createdOn, gener, time, director) {
        this.id = id
        this.name = name;
        this.createdOn = createdOn;
        this.gener = gener;
        this.time = time;
        this.director = director;
    }
}

module.exports = Movie;