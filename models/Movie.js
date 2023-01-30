class Movie {
    _id
    _name
    _createdOn
    _gener
    _time
    _director

    constructor(id, name, createdOn, gener, time, director) {
        this._id = id
        this._name = name;
        this._createdOn = createdOn;
        this._gener = gener;
        this._time = time;
        this._director = director;
    }
}

module.exports = Movie;