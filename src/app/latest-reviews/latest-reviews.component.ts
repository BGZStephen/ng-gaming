import { Component, OnInit } from '@angular/core';
import { ReviewSearchService } from "../services/review-search.service"
import { GameSearchService } from "../services/game-search.service"

@Component({
  selector: 'app-latest-reviews',
  templateUrl: './latest-reviews.component.html',
  styleUrls: ['./latest-reviews.component.css']
})

export class LatestReviewsComponent implements OnInit {

  latestReviews = [
  //   {imgUrl: "http://placehold.it/300x150", heading: "Test Heading 1", date: "August 23, 2017", comments: "No comments"},
  //   {imgUrl: "http://placehold.it/300x150", heading: "Test Heading 2", date: "August 23, 2017", comments: "No comments"},
  //   {imgUrl: "http://placehold.it/300x150", heading: "Test Heading 3", date: "August 23, 2017", comments: "No comments"},
  //   {imgUrl: "http://placehold.it/300x150", heading: "Test Heading 4", date: "August 23, 2017", comments: "No comments"},
  //   {imgUrl: "http://placehold.it/300x150", heading: "Test Heading 5", date: "August 23, 2017", comments: "No comments"},
  //   {imgUrl: "http://placehold.it/300x150", heading: "Test Heading 6", date: "August 23, 2017", comments: "No comments"},
  ]

  constructor(private reviewSearch: ReviewSearchService, private gameSearch: GameSearchService) {
    this.reviewSearch.getPopular()
    .subscribe(res => {
      for(let i = 0; i < 6; i++) {
        this.reviewSearch.getReview(res[i].id)
        .subscribe(res => {
          let reviewObj = {review: "", reviewUrl: "", imgUrl: "", name: ""}
          reviewObj.review = res[0].content
          reviewObj.reviewUrl = res[0].url
          this.gameSearch.getGame(res[0].game)
          .subscribe(res => {
            reviewObj.imgUrl = res[0].cover.cloudinary_id
            reviewObj.name = res[0].name
            this.latestReviews.push(reviewObj)
            // console.log(this.latestReviews)
          })
        })
      }
    })
  }

  ngOnInit() {
  }

}
