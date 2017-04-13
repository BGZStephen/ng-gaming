import { Component, OnInit } from '@angular/core';
import { BlogSearchService } from "../../services/blog-search.service"

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  searchResults = []

  constructor(private blogSearch: BlogSearchService) {
    this.blogSearch.getLatest20()
    .subscribe(res => {
      this.searchResults = res;
      console.log(this.searchResults)
    })
  }

  ngOnInit() {
  }

}
