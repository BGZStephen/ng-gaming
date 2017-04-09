import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { router } from "./app.routes"

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from "./pages/home/home.component";
import { NewsTickerComponent } from './news-ticker/news-ticker.component';
import { ReviewsCarouselComponent } from './reviews-carousel/reviews-carousel.component';
import { LatestReviewsComponent } from './latest-reviews/latest-reviews.component'


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    NewsTickerComponent,
    ReviewsCarouselComponent,
    LatestReviewsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    router
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
