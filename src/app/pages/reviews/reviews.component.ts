import { Component, OnInit } from '@angular/core';
import { ReviewSearchService } from "../../services/review-search.service"
import { GameSearchService } from "../../services/game-search.service"


@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.css']
})
export class ReviewsComponent implements OnInit {

  searchResults = []

  constructor(private reviewSearch: ReviewSearchService, private gameSearch: GameSearchService) {
    this.reviewSearch.getLatest()
    .subscribe(res => {
      for(let i = 0; i < res.length; i ++) {
        let reviewObj = {author: "", updated: "", review: "", reviewUrl: "", imgUrl: "", name: ""}
        reviewObj.review = res[i].content
        reviewObj.reviewUrl = res[i].url
        reviewObj.author = res[i].username
        reviewObj.updated = res[i].updated_at
        // console.log(res)
        this.gameSearch.getGame(res[i].game)
        .subscribe(res => {
          reviewObj.imgUrl = res[0].cover.cloudinary_id
          reviewObj.name = res[0].name
          this.searchResults.push(reviewObj)
          console.log(res)
        })
      }
    })
  }

  ngOnInit() {
  }

}
