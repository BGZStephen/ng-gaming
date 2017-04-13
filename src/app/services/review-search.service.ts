import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers } from "@angular/http"
import "rxjs/Rx";

@Injectable()
export class ReviewSearchService {

  constructor(private http: Http) { }

  headers = new Headers({
      'X-Mashape-Key': "6PrBxXUbnfmshSDJzrpQIE3RYkMup1rjz4njsn6bDZ0I57Mn0R",
      'Accept': 'application/json'
  })

  getPopular() {
    let searchUrl = "https://igdbcom-internet-game-database-v1.p.mashape.com/reviews/"
    return this.http.get(searchUrl, {headers: this.headers})
    .map(res => res.json())
  }

  getLatest() {
    let searchUrl = "https://igdbcom-internet-game-database-v1.p.mashape.com/reviews/?fields=*&order=updated_at:desc&limit=20"
    return this.http.get(searchUrl, {headers: this.headers})
    .map(res => res.json())
  }

  getReview(id) {
    let searchUrl = "https://igdbcom-internet-game-database-v1.p.mashape.com/reviews/"+id+"?fields=*"
    return this.http.get(searchUrl, {headers: this.headers})
    .map(res => res.json())
  }

}
