import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers } from "@angular/http"
import "rxjs/Rx";

@Injectable()
export class GameSearchService {

  constructor(private http: Http) { }

  getPopular() {
    let headers = new Headers({
        'X-Mashape-Key': "6PrBxXUbnfmshSDJzrpQIE3RYkMup1rjz4njsn6bDZ0I57Mn0R",
        'Accept': 'application/json'
      })
    let searchUrl = "https://igdbcom-internet-game-database-v1.p.mashape.com/games/?fields=name,popularity&order=popularity:asc"
    return this.http.get(searchUrl, {headers: headers})
    .map(res => res.json())
  }
}
