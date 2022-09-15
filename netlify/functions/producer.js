'use strict';
const express = require('express');
const serverless = require('serverless-http');
const exp = express();
const bodyParser = require('body-parser');
let producers = [{
        "id": "1",
        "producer_name": "New Line Cinema",
        "country": "United States",
        "founded": 1967,
        "genere": "Adventures, Terror, Action",
        "movies": [{
                "movie_id": 1,
                "title": "A Nightmare on Elm Street"
            },
            {
                "movie_id": 3,
                "title": "Lights Out"
            },
            {
                "movie_id": 4,
                "title": "Annabelle: Creation"
            }
        ]
    },
    {
        "id": "1",
        "producer_name": "Woods Entertainment",
        "country": "Canada",
        "founded": 1970,
        "genere": "Detective, Terror, Thriller",
        "movies": [{
            "movie_id": 2,
            "title": "Scream"
        }]
    }
];
const app = express.Router();
app.get('/', (req, res) => {
    res.json(producers);
})
app.get('/:id', (req, res) => {
    let producer = producers.find(i => i.id == req.params.id);
    if (producer == undefined)
        res.status(404).send('Producer not found');
    else
        res.json(producer);
})
app.post('/:id', (req, res) => {
    let index = producers.findIndex(i => i.id == req.params.id);
    if (index != -1)
        res.status(404).send('Producer already exits');
    else {
        producers.push(body);
        //saveproducers();
    }
})
app.put('/', (req, res) => {
    let index = producers.findIndex(i => i.id == req.params.id);
    if (index == -1)
        res.status(404).send('Producer not found');
    else {
        producers[index] = body;
        //saveproducers();
    }
})
app.delete('/:id', (req, res) => {
    let index = producers.findIndex(i => i.id == req.params.id);
    if (index == -1)
        return resolve();
    else {
        producers = producers.filter(i => i.id != req.params.id);
        //saveproducers();
    }
})
exp.use(bodyParser.json());
exp.use('/.netlify/functions/producer', app);
module.exports = exp;
module.exports.handler = serverless(exp);