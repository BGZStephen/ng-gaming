import { Component, OnInit } from '@angular/core';
import { GenreSearchService } from "../../../services/genre-search.service"
import { GameSearchService } from "../../../services/game-search.service"

@Component({
  selector: 'app-sport-latest',
  templateUrl: '../../shared/genre-latest.html',
  styleUrls: ['../../shared/genre-latest.css']
})
export class SportLatestComponent implements OnInit {

  category = "Sport"
  genreId = "14"
  games = {
    primary: {},
    secondary: [
    ],
  }

  constructor(private genreSearch: GenreSearchService, private gameSearch: GameSearchService) {
    this.genreSearch.getPopularByGenre(this.genreId)
    .subscribe(res => {
      this.games.primary = res[0]
      console.log(this.games.primary)
      for(let i = 1; i < 4; i++) {
        this.games.secondary.push(res[i])
      }
    })
  }

  ngOnInit() {
  }

}
