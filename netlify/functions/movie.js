'use strict';
const express = require('express');
const serverless = require('serverless-http');
const exp = express();
const bodyParser = require('body-parser');
let movies = [{
        "id": "1",
        "title": "A Nightmare on Elm Street",
        "country": "United States",
        "year": 1984,
        "language": "ENGLISH",
        "duration": 91,
        "director": "Wes Craven",
        "director_id": 1,
        "producer": "New Line Cinema",
        "producer_id": 1
    },
    {
        "id": "2",
        "title": "Scream",
        "country": "United States",
        "year": 1996,
        "language": "ENGLISH",
        "duration": 111,
        "director": "Wes Craven",
        "director_id": 1,
        "producer": "Woods Entertainment",
        "producer_id": 2
    },
    {
        "id": "3",
        "title": "Lights Out",
        "country": "United States",
        "year": 2016,
        "language": "ENGLISH",
        "duration": 81,
        "director": "David F. Sandberg",
        "director_id": 2,
        "producer": "New Line Cinema",
        "producer_id": 1
    },
    {
        "id": "4",
        "title": "Annabelle: Creation",
        "country": "United States",
        "year": 2017,
        "language": "ENGLISH",
        "duration": 110,
        "director": "David F. Sandberg",
        "director_id": 2,
        "producer": "New Line Cinema",
        "producer_id": 1
    }
];
const app = express.Router();
app.get('/', (req, res) => {
    res.json(movies);
});
app.get('/:id', (req, res) => {
    let movie = movies.find(i => i.id == req.params.id);
    if (movie == undefined)
        res.status(404).send('Movie not found');
    else
        res.json(movie);
});
app.post('/:id', (req, res) => {
    let index = movies.findIndex(i => i.id == req.params.id);
    if (index != -1)
        res.status(404).send('Movie already exits');
    else {
        movies.push(body);
    }
});
app.put('/', (req, res) => {
    let index = movies.findIndex(i => i.id == req.params.id);
    if (index == -1)
        res.status(404).send('Movie not found');
    else {
        movies[index] = body;
    }
});
app.delete('/:id', (req, res) => {
    let index = movies.findIndex(i => i.id == req.params.id);
    if (index == -1)
        return resolve();
    else {
        movies = movies.filter(i => i.id != req.params.id);
    }
});
exp.use(bodyParser.json());
exp.use('/.netlify/functions/movie', app);
module.exports = exp;
module.exports.handler = serverless(exp);