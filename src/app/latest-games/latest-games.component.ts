import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-latest-games',
  templateUrl: './latest-games.component.html',
  styleUrls: ['./latest-games.component.css']
})
export class LatestGamesComponent implements OnInit {

  constructor() { }

  games = [
      {imgUrl: "http://placehold.it/50x50", header: "Latest Games 1"},
      {imgUrl: "http://placehold.it/50x50", header: "Latest Games 2"},
      {imgUrl: "http://placehold.it/50x50", header: "Latest Games 3"},
      {imgUrl: "http://placehold.it/50x50", header: "Latest Games 4"},
      {imgUrl: "http://placehold.it/50x50", header: "Latest Games 5"},
      {imgUrl: "http://placehold.it/50x50", header: "Latest Games 6"},
      {imgUrl: "http://placehold.it/50x50", header: "Latest Games 7"},
      {imgUrl: "http://placehold.it/50x50", header: "Latest Games 8"},
      {imgUrl: "http://placehold.it/50x50", header: "Latest Games 9"},
      {imgUrl: "http://placehold.it/50x50", header: "Latest Games 10"},
  ]

  ngOnInit() {
  }

}
