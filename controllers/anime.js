const express = require('express');
const router = express.Router();

const Anime = require('../models/anime');

// display all anime
router.get('/', (req, res) => {
  const animeData = Anime.all;
  res.status(200).send(animeData);
});

/* To test below do this in the browser console:
const newAnime = JSON.stringify({ title: "Sword Art Online"})
fetch('http://localhost:3000/anime', {method: 'POST', body: newAnime, headers: {'Content-Type': 'application/json'}}).then(r => r.json()).then(console.log) 
*/
router.post('/', (req, res) => {
    const data = req.body;
    const newAnime = Anime.create(data);
    res.send({message: `${newAnime.title} successfully added to our collection.`});
});

// get one anime by id
router.get('/:id', (req, res) => {
  const anime = Anime.getAnimeById(req.params.id);
  console.log(anime);
  if(anime !== undefined) res.status(200).send(anime);
  else res.status(404).send('Anime does not exists');
});

// update one anime by id
router.put('/:id', (req, res) => {
  const animeIndex = Anime.getIndexById(req.params.id);
  const newAnimeQ = req.query;
  console.log(newAnimeQ);
});

module.exports = router;
