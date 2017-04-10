import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-adventure-latest',
  templateUrl: './adventure-latest.component.html',
  styleUrls: ['../../shared/genre-latest.css']
})
export class AdventureLatestComponent implements OnInit {

  constructor() { }

  adventureGames = {
    primary: {imgUrl: "http://placehold.it/300x150", header: "Test Primary Header", date: "August 31, 2016", comments: "No comments", description: "This is a test description"},
    secondary: [
      {imgUrl: "http://placehold.it/300x150", header: "Test Adventure Header #1", date: "August 31, 2016", comments: "No comments"},
      {imgUrl: "http://placehold.it/300x150", header: "Test Adventure Header #2", date: "August 31, 2016", comments: "No comments"},
      {imgUrl: "http://placehold.it/300x150", header: "Test Adventure Header #3", date: "August 31, 2016", comments: "No comments"},
    ]
  }

  ngOnInit() {
  }

}
