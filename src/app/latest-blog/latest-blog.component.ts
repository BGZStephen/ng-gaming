import { Component, OnInit } from '@angular/core';
import { BlogSearchService } from "../services/blog-search.service"

@Component({
  selector: 'app-latest-blog',
  templateUrl: './latest-blog.component.html',
  styleUrls: ['./latest-blog.component.css']
})
export class LatestBlogComponent implements OnInit {

  blogEntries = []

  constructor(private blogSearch: BlogSearchService) {
    this.blogSearch.getLatest()
    .subscribe(res => {
      this.blogEntries = res
      console.log(this.blogEntries)
    })
  }

  ngOnInit() {
  }

}
