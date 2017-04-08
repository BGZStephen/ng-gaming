import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { GameSearchService } from "./services/game-search.service"
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './pages/home/home.component';
import { ChartsComponent } from './pages/charts/charts.component';
import { XboxOneComponent } from './pages/xbox-one/xbox-one.component';
import { PlaystationFourComponent } from './pages/playstation-four/playstation-four.component';
import { NintendoSwitchComponent } from './pages/nintendo-switch/nintendo-switch.component';
import { ReleaseDatesComponent } from './pages/release-dates/release-dates.component';
import { FooterComponent } from './footer/footer.component';
import { PopularGamesComponent } from './popular-games/popular-games.component';
import { CharLimit } from "./pipes/charlimit"

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    ChartsComponent,
    XboxOneComponent,
    PlaystationFourComponent,
    NintendoSwitchComponent,
    ReleaseDatesComponent,
    FooterComponent,
    PopularGamesComponent,
    CharLimit
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
  ],
  providers: [GameSearchService],
  bootstrap: [AppComponent]
})
export class AppModule { }
