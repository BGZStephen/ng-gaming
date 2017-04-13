import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers } from "@angular/http"
import "rxjs/Rx";

@Injectable()
export class GameSearchService {

  constructor(private http: Http) { }

  headers = new Headers({
      'X-Mashape-Key': "6PrBxXUbnfmshSDJzrpQIE3RYkMup1rjz4njsn6bDZ0I57Mn0R",
      'Accept': 'application/json'
  })

  getPopular() {
    let searchUrl = "https://igdbcom-internet-game-database-v1.p.mashape.com/games/?fields=name,popularity&order=popularity:desc"
    return this.http.get(searchUrl, {headers: this.headers})
    .map(res => res.json())
  }

  getGame(id) {
    let searchUrl = "https://igdbcom-internet-game-database-v1.p.mashape.com/games/"+id+"?fields=*"
    return this.http.get(searchUrl, {headers: this.headers})
    .map(res => res.json())
  }

  getRecentGames() {
    let searchUrl = "https://igdbcom-internet-game-database-v1.p.mashape.com//games/?order=release_dates.date:desc"
    return this.http.get(searchUrl, {headers: this.headers})
    .map(res => res.json())
  }

  getGenre(genre) {
    let searchUrl = "https://igdbcom-internet-game-database-v1.p.mashape.com/genres/"+genre+"?fields=*"
    return this.http.get(searchUrl, {headers: this.headers})
    .map(res => res.json())
  }

  textSearch(string) {
    let searchUrl = "https://igdbcom-internet-game-database-v1.p.mashape.com//games/?limit=50&fields=*&search="+string
    return this.http.get(searchUrl, {headers: this.headers})
    .map(res => res.json())
  }
}
