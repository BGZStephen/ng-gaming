import { Component, OnInit } from '@angular/core';
import { GameSearchService } from "../services/game-search.service"

@Component({
  selector: 'app-latest-games',
  templateUrl: './latest-games.component.html',
  styleUrls: ['./latest-games.component.css']
})
export class LatestGamesComponent implements OnInit {

  games = [
  ]

  constructor(private gameSearch: GameSearchService) {

    var idString = "";
    this.gameSearch.getRecentGames()
    .subscribe(res => {
      for(let i = 0; i < res.length; i++) {
        idString += res[i].id + ","
      }
      idString = idString.substring(0, idString.length - 1);
      this.gameSearch.getGame(idString)
      .subscribe(res => {
        this.games = res
      })
    })
  }


  ngOnInit() {

  }
}
