import { Component, OnInit } from '@angular/core';
import { GenreSearchService } from "../../../services/genre-search.service"
import { GameSearchService } from "../../../services/game-search.service"

@Component({
  selector: 'app-adventure-latest',
  templateUrl: '../../shared/genre-latest.html',
  styleUrls: ['../../shared/genre-latest.css']
})

export class AdventureLatestComponent implements OnInit {

  category = "Adventure"
  genreId = "31"
  games = {
    primary: {},
    secondary: [
    ],
  }

  constructor(private genreSearch: GenreSearchService, private gameSearch: GameSearchService) {
    this.genreSearch.getPopularByGenre(this.genreId)
    .subscribe(res => {
      this.games.primary = res[0]
      for(let i = 1; i < 4; i++) {
        this.games.secondary.push(res[i])
      }
    })
  }

  ngOnInit() {
  }

}
