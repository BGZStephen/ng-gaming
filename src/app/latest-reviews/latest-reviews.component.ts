import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-latest-reviews',
  templateUrl: './latest-reviews.component.html',
  styleUrls: ['./latest-reviews.component.css']
})
export class LatestReviewsComponent implements OnInit {

  latestReviews = [
    {imgUrl: "http://placehold.it/300x150", heading: "Test Heading 1", date: "August 23, 2017", comments: "No comments"},
    {imgUrl: "http://placehold.it/300x150", heading: "Test Heading 2", date: "August 23, 2017", comments: "No comments"},
    {imgUrl: "http://placehold.it/300x150", heading: "Test Heading 3", date: "August 23, 2017", comments: "No comments"},
    {imgUrl: "http://placehold.it/300x150", heading: "Test Heading 4", date: "August 23, 2017", comments: "No comments"},
    {imgUrl: "http://placehold.it/300x150", heading: "Test Heading 5", date: "August 23, 2017", comments: "No comments"},
    {imgUrl: "http://placehold.it/300x150", heading: "Test Heading 6", date: "August 23, 2017", comments: "No comments"},
  ]
  constructor() { }

  ngOnInit() {
  }

}
