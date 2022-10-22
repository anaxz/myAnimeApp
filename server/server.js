const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors'); //This will enable access for all routes from any origin
const server = express();
//const Anime = require('./models/anime');

const port = 3000;

server.use(bodyParser.json());
server.use(cors());

// Everything in the public folder
// helps with access acording to folder level without coding
server.use(express.static("public"));

const animeRoute = require('../controllers/anime');
server.use('/anime', animeRoute);

server.listen(port, () => console.log(`Express departing now from http://localhost:${port}!`))

// You can test it with this snippet in browser console
// const show = JSON.stringify({ title: "Haikyu!!"})
// fetch('http://localhost:3000/anime', {method: 'POST', body: show, headers: {'Content-Type': 'application/json'}}).then(r => r.json()).then(console.log)

// module.exports = { server };

//https://github.com/anaxz/fp_study_notes_API_frameworks
