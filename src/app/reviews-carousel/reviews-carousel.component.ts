import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reviews-carousel',
  templateUrl: './reviews-carousel.component.html',
  styleUrls: ['./reviews-carousel.component.css']
})
export class ReviewsCarouselComponent implements OnInit {

  constructor() { }

  carouselItems = [
    {imgUrl: "http://placehold.it/300x150", heading: "Heading 1", description: "Description 1"},
    {imgUrl: "http://placehold.it/300x150", heading: "Heading 2", description: "Description 2"},
    {imgUrl: "http://placehold.it/300x150", heading: "Heading 3", description: "Description 3"},
  ]

  ngOnInit() {
  }

}
