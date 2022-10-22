const animeData = require('../server/data');

class Anime {
  constructor(data) {
    this.id = data.id;
    this.title = data.title;
  }
  static get all() {
    // generate new array of class anime
    const animes = animeData.map(anime => new Anime(anime));
    return animes;
  }

  static create(anime) {
    const newAnimeId = animeData.length + 1;
    const newAnime = new Anime({ id: newAnimeId, ...anime });
    animeData.push(newAnime);
    return newAnime;
  }

  // getElementById
  static getAnimeById(id){
    const animeList = animeData.map(anime => new Anime(anime));
    return animeList.find( anime => {
      if(anime.id === Number(id) ) return anime;
    })
  }

  // only works with lists? not list of objects??
  static getIndexById(id){
    const list = animeData.map(anime => new Anime(anime));
    return list.findIndex( element => {
      return element.id === Number(id);
    })
  }

}

module.exports = Anime;
