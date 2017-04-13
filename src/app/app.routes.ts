import { Routes, RouterModule } from "@angular/router"
import { HomeComponent } from "./pages/home/home.component"
import { GameComponent } from "./pages/game/game.component"
import { SearchComponent } from "./pages/search/search.component"
import { BlogComponent } from "./pages/blog/blog.component"
import { BlogItemComponent } from "./pages/blog/blog-item.component"
import { ReviewsComponent } from "./pages/reviews/reviews.component"

const APP_ROUTES: Routes = [
    {path: '', component: HomeComponent},
    {path: 'game/:id', component: GameComponent},
    {path: 'search/:string', component: SearchComponent},
    {path: 'blog', component: BlogComponent},
    {path: 'blog/:id', component: BlogItemComponent},
    {path: 'reviews', component: ReviewsComponent},
]

export const router = RouterModule.forRoot(APP_ROUTES)
