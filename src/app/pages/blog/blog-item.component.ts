import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router"
import { BlogSearchService } from "../../services/blog-search.service"

@Component({
  selector: 'app-blog-item',
  templateUrl: './blog-item.component.html',
  styleUrls: ['./blog-item.component.css']
})
export class BlogItemComponent implements OnInit {

  searchResult = []

  constructor(private blogSearch: BlogSearchService, private activatedRoute: ActivatedRoute) {
    this.activatedRoute.params
    .map(params => params["id"])
    .subscribe((id) => {
      this.blogSearch.getBlogArticle(id)
      .subscribe(res => {
        this.searchResult = res
        console.log(this.searchResult)
      })
    })
  }

  ngOnInit() {
  }

}
