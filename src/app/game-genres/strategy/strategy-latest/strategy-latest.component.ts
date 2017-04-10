import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-strategy-latest',
  templateUrl: './strategy-latest.component.html',
  styleUrls: ['../../shared/genre-latest.css']
})
export class StrategyLatestComponent implements OnInit {

  constructor() { }

  category = "Strategy"
  strategyGames = {
    primary: {imgUrl: "http://placehold.it/300x150", header: "Test Primary Header", date: "August 31, 2016", comments: "No comments", description: "This is a test description"},
    secondary: [
      {imgUrl: "http://placehold.it/300x150", header: "Test Strategy Header #1", date: "August 31, 2016", comments: "No comments"},
      {imgUrl: "http://placehold.it/300x150", header: "Test Strategy Header #2", date: "August 31, 2016", comments: "No comments"},
      {imgUrl: "http://placehold.it/300x150", header: "Test Strategy Header #3", date: "August 31, 2016", comments: "No comments"},
    ]
  }

  ngOnInit() {
  }

}
