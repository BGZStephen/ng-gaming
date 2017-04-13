import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router"
import { GameSearchService } from "../../services/game-search.service"

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  searchResults = []

  constructor(private gameSearch: GameSearchService, private activatedRoute: ActivatedRoute) {
    this.activatedRoute.params
    .map(params => params["string"])
    .subscribe((string) => {
      this.gameSearch.textSearch(string)
      .subscribe(res => {
        this.searchResults = res
        console.log(this.searchResults)
      })
    })
  }

  ngOnInit() {
  }

}
