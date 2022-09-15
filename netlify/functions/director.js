'use strict';
const express = require('express');
const serverless = require('serverless-http');
const exp = express();
const bodyParser = require('body-parser');
let directors = [{
        "id": "1",
        "director_name": "Wes craven",
        "nationality": "American",
        "birth_year": 1939,
        "fields": "Director, writer",
        "movies": [{
                "movie_id": 1,
                "title": "A Nightmare on Elm Street"
            },
            {
                "movie_id": 2,
                "title": "Scream"
            }
        ]
    },
    {
        "id": "2",
        "director_name": "David F. Sandberg",
        "nationality": "American",
        "birth_year": 1981,
        "fields": "Director, youtuber",
        "movies": [{
                "movie_id": 3,
                "title": "Lights Out"
            },
            {
                "movie_id": 4,
                "title": "Annabelle: Creation"
            }
        ]
    }
];
const app = express.Router();
app.get('/', (req, res) => {
    res.json(directors);
})
app.get('/:id', (req, res) => {
    let director = directors.find(i => i.id == req.params.id);
    if (director == undefined)
        res.status(404).send('Director not found');
    else
        res.json(director);
})
app.post('/:id', (req, res) => {
    let index = directors.findIndex(i => i.id == req.params.id);
    if (index != -1)
        res.status(404).send('Director already exits');
    else {
        directors.push(body);
    }
})
app.put('/', (req, res) => {
    let index = directors.findIndex(i => i.id == req.params.id);
    if (index == -1)
        res.status(404).send('Director not found');
    else {
        directors[index] = body;
    }
})
app.delete('/:id', (req, res) => {
    let index = directors.findIndex(i => i.id == req.params.id);
    if (index == -1)
        return resolve();
    else {
        directors = directors.filter(i => i.id != req.params.id);
    }
})
exp.use(bodyParser.json());
exp.use('/.netlify/functions/director', app);
module.exports = exp;
module.exports.handler = serverless(exp);