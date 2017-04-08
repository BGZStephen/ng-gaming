import { Component, OnInit } from '@angular/core';
import { GameSearchService } from "../services/game-search.service"

@Component({
  selector: 'app-popular-games',
  templateUrl: './popular-games.component.html',
  styleUrls: ['./popular-games.component.css']
})
export class PopularGamesComponent implements OnInit {

  constructor(private gameSearch: GameSearchService) { }

  games = []
  popularGames = []

  ngOnInit() {
    this.gameSearch.getPopular()
    .subscribe(games => {
      this.popularGames = games;
      console.log(this.popularGames.length)
      for(let i = 0; i < this.popularGames.length; i++) {
        this.gameSearch.getGame(this.popularGames[i].id)
        .subscribe(games => {
          this.games.push(games)
          console.log(games)
        })
      }
    })
  }
}
