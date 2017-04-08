import { Component, OnInit } from '@angular/core';
import { GameSearchService } from "../../services/game-search.service"

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private gameSearch: GameSearchService) { }

  games = []

  ngOnInit() {
    this.gameSearch.getPopular()
    .subscribe(games => {
      console.log(games)
      games = games;
    })
  }

}
