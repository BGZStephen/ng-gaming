import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { SafeResourceUrl, DomSanitizer } from '@angular/platform-browser';
import { GameSearchService } from "../../services/game-search.service"

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent {

  game = []
  videos = []
  baseUrl:string = 'https://www.youtube.com/embed/';

  constructor(private activatedRoute: ActivatedRoute, private gameSearch: GameSearchService, private sanitizer: DomSanitizer) {

    activatedRoute.params
    .map(params => params["id"])
    .subscribe((id) => {
      this.gameSearch.getGame(id)
      .subscribe(res => {
        this.game.push(res[0]);
        console.log(this.game)
      })
    })
  }

  videoUrl(i) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(this.baseUrl + this.game[0].videos[i].video_id)
  }
}
