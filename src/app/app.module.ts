import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { router } from "./app.routes"

import { AppComponent } from './app.component';
import { GameSearchService } from "./services/game-search.service"
import { ReviewSearchService } from "./services/review-search.service"
import { GenreSearchService } from "./services/genre-search.service"
import { BlogSearchService } from "./services/blog-search.service"
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from "./pages/home/home.component";
import { NewsTickerComponent } from './news-ticker/news-ticker.component';
import { ReviewsCarouselComponent } from './reviews-carousel/reviews-carousel.component';
import { LatestReviewsComponent } from './latest-reviews/latest-reviews.component';
import { RpgLatestComponent } from './game-genres/rpg/rpg-latest/rpg-latest.component';
import { AdventureLatestComponent } from './game-genres/adventure/adventure-latest/adventure-latest.component';
import { SportLatestComponent } from './game-genres/sport/sport-latest/sport-latest.component';
import { StrategyLatestComponent } from './game-genres/strategy/strategy-latest/strategy-latest.component';
import { FeaturedGameComponent } from './featured-game/featured-game.component';
import { LatestGamesComponent } from './latest-games/latest-games.component';
import { LatestBlogComponent } from './latest-blog/latest-blog.component'


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    NewsTickerComponent,
    ReviewsCarouselComponent,
    LatestReviewsComponent,
    RpgLatestComponent,
    AdventureLatestComponent,
    SportLatestComponent,
    StrategyLatestComponent,
    FeaturedGameComponent,
    LatestGamesComponent,
    LatestBlogComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    router
  ],
  providers: [GameSearchService, ReviewSearchService, GenreSearchService, BlogSearchService],
  bootstrap: [AppComponent]
})
export class AppModule { }
