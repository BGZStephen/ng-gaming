import { Component, OnInit } from '@angular/core';
import { GameSearchService } from "../services/game-search.service"

@Component({
  selector: 'app-featured-game',
  templateUrl: './featured-game.component.html',
  styleUrls: ['./featured-game.component.css']
})
export class FeaturedGameComponent implements OnInit {

  game = {imgUrl: "http://placehold.it/350x350", header: "Test Featured Game Header"}

  constructor(private gameSearch: GameSearchService) {

  }


  ngOnInit() {
  }

}
