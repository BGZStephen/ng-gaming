import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sport-latest',
  templateUrl: '../../shared/genre-latest.html',
  styleUrls: ['../../shared/genre-latest.css']
})
export class SportLatestComponent implements OnInit {

  constructor() { }

  category = "Sports"
  games = {
    primary: {imgUrl: "http://placehold.it/300x150", header: "Test Primary Header", date: "August 31, 2016", comments: "No comments", description: "This is a test description"},
    secondary: [
      {imgUrl: "http://placehold.it/300x150", header: "Test Sport Header #1", date: "August 31, 2016", comments: "No comments"},
      {imgUrl: "http://placehold.it/300x150", header: "Test Sport Header #2", date: "August 31, 2016", comments: "No comments"},
      {imgUrl: "http://placehold.it/300x150", header: "Test Sport Header #3", date: "August 31, 2016", comments: "No comments"},
    ]
  }



  ngOnInit() {
  }

}
