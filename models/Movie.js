class Movie {
    _name
    _createdOn
    _gener
    _time
    _director

    constructor(name, createdOn, gener, time, director) {
        this._name = name;
        this._createdOn = createdOn;
        this._gener = gener;
        this._time = time;
        this._director = director;
    }
}

module.exports = Movie;