import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reviews-carousel',
  templateUrl: './reviews-carousel.component.html',
  styleUrls: ['./reviews-carousel.component.css']
})
export class ReviewsCarouselComponent implements OnInit {

  constructor() { }

  carouselItems = [
    {imgUrl: "http://placehold.it/300x150", heading: "Heading1", description: "Description1"},
    {imgUrl: "http://placehold.it/300x150", heading: "Heading2", description: "Description2"},
    {imgUrl: "http://placehold.it/300x150", heading: "Heading3", description: "Description3"},
  ]

  ngOnInit() {
  }

}
