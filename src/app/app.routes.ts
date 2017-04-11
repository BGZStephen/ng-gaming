import { Routes, RouterModule } from "@angular/router"
import { HomeComponent } from "./pages/home/home.component"
import { GameComponent } from "./pages/game/game.component"

const APP_ROUTES: Routes = [
    {path: '', component: HomeComponent},
    {path: 'game/:id', component: GameComponent}
]

export const router = RouterModule.forRoot(APP_ROUTES)
