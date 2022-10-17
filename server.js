// in server.js
const express = require('express');
const server = express();

server.use(express.json());
// server.use(cors())

const port = 3000;
server.listen(port, () => console.log(`Express departing now from http://localhost:${port}!`))



const anime = [{
    id: 1, title: "Bleach"},
    {id: 2, title: "SpyxFamily"},
    {id: 3, title: "Naruto"
}]

//display all anime
server.get("/anime", (req, res) => res.send(anime));

// get anime by id
// server.get("/anime/:id", (req, res) => {
//     const show = anime.find(g => g.id === parseInt(req.params.id));
//   if(!show) return res.status(404).send('This anime is not in our list');
//   res.send(show);

// })

server.post('/anime', (req, res) => res.send({message: 'POST /anime was called'}))
// in server.js
const bodyParser = require('body-parser');
// after server has been declared
server.use(bodyParser.json());



server.post("/anime", (req, res) => {
    const show = req.body;
    const showId = show.length+1
    show.push({id: showId, "title": show})
    res.send({message: `${show.title} successfully added to our collection.`})

})



// server.put("/amime/:id", (req, res)=>{
//     const show = anime.find(g => g.id === parseInt(req.params.id));
//   if(!show) return res.status(404).send('This anime is not in our list');
  
//   show.title = req.body.title;
//   res.send(game)
// })


// You can test it with this snippet in browser console
// const show = JSON.stringify({ title: "Haikyu!!"})
// fetch('http://localhost:3000/anime', {method: 'POST', body: show, headers: {'Content-Type': 'application/json'}}).then(r => r.json()).then(console.log)
module.exports = (server)
