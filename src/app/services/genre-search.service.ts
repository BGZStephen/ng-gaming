import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers } from "@angular/http"
import "rxjs/Rx";

@Injectable()
export class GenreSearchService {

  constructor(private http: Http) { }

  headers = new Headers({
      'X-Mashape-Key': "6PrBxXUbnfmshSDJzrpQIE3RYkMup1rjz4njsn6bDZ0I57Mn0R",
      'Accept': 'application/json'
  })

  getPopularByGenre(id) {
    let searchUrl = "https://igdbcom-internet-game-database-v1.p.mashape.com/games/?fields=*&filter[genres][eq]="+id+"&limit=5&order=popularity:desc"
    return this.http.get(searchUrl, {headers: this.headers})
    .map(res => res.json())
  }

}
