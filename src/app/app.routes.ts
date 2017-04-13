import { Routes, RouterModule } from "@angular/router"
import { HomeComponent } from "./pages/home/home.component"
import { GameComponent } from "./pages/game/game.component"
import { SearchComponent } from "./pages/search/search.component"

const APP_ROUTES: Routes = [
    {path: '', component: HomeComponent},
    {path: 'game/:id', component: GameComponent},
    {path: 'search/:string', component: SearchComponent}
]

export const router = RouterModule.forRoot(APP_ROUTES)
