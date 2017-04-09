import { Routes, RouterModule } from "@angular/router"
import { HomeComponent } from "./pages/home/home.component"

const APP_ROUTES: Routes = [
    {path: '', component: HomeComponent}
]

export const router = RouterModule.forRoot(APP_ROUTES)
