import { Component, OnInit } from '@angular/core';
import { GameSearchService } from "../services/game-search.service"

@Component({
  selector: 'app-featured-game',
  templateUrl: './featured-game.component.html',
  styleUrls: ['./featured-game.component.css']
})
export class FeaturedGameComponent implements OnInit {

  game = []

  constructor(private gameSearch: GameSearchService) {
    this.gameSearch.getPopular()
    .subscribe(res => {
      this.gameSearch.getGame(res[3].id)
      .subscribe(res => {
        this.game.push(res[0]);
      })
    })
  }


  ngOnInit() {
  }

}
