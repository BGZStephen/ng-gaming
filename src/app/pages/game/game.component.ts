import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router"
import { GameSearchService } from "../../services/game-search.service"

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute, private gameSearch: GameSearchService) {
    activatedRoute.params
    .map(params => params["id"])
    .subscribe((id) => {
      this.gameSearch.getGame(id)
      .subscribe(res => {
        console.log(res)
      })
    })
  }

  ngOnInit() {
  }

}
