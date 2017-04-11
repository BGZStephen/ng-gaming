import { Injectable } from '@angular/core';
import { Http, Headers } from "@angular/http"
import "rxjs/Rx";

@Injectable()
export class BlogSearchService {

  constructor(private http: Http) { }

  headers = new Headers({
      'X-Mashape-Key': "6PrBxXUbnfmshSDJzrpQIE3RYkMup1rjz4njsn6bDZ0I57Mn0R",
      'Accept': 'application/json'
  })

  getLatest() {
    let searchUrl = "https://igdbcom-internet-game-database-v1.p.mashape.com/pulses/?fields=*"
    return this.http.get(searchUrl, {headers: this.headers})
    .map(res => res.json())
  }

}
