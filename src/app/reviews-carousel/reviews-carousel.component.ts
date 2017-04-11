import { Component, OnInit, Input } from '@angular/core';
import { GameSearchService } from "../services/game-search.service"
import { HomeComponent } from "../pages/home/home.component"

@Component({
  selector: 'app-reviews-carousel',
  templateUrl: './reviews-carousel.component.html',
  styleUrls: ['./reviews-carousel.component.css']
})
export class ReviewsCarouselComponent implements OnInit {

  carouselItems = []
  limit = 3; //Carousel slide number, used to limit items pushed to the CarouselItems array

  constructor(private gameSearch: GameSearchService) {
    this.gameSearch.getPopular()
    .subscribe(res => {
      for(let i = 0; i < this.limit; i++) {
        this.gameSearch.getGame(res[i].id)
        .subscribe(res => {
          // console.log(res[0])
          this.carouselItems.push(res[0])
        })
      }
    })
  }


  ngOnInit() {
  }

}
