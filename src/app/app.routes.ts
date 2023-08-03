import { RoutersModule Routes} from "@angular/router";
import { heroesComponent Routes} from "./components/componentes/heroes/heroes.component"
import { homeComponent Routes} from "./components/componentes/home/home.component"
import { nosotrosComponent Routes} from "./components/componentes/nosotros/nosotros.component"
import { historiaComponent Routes} from "./components/componentes/historia/historia.component"

const APP_ROUTES: Routes=[
 {path: 'home',component:HomeComponent},
 {path: 'heroes',component:heroesComponent},
 {path: 'nosotros',component:nosotrosComponent},
 {path: 'historia',component:historiaComponent},
 {path: "**", pathMatch: 'full', redirectTo: 'home'}

];

export conts APP_ROUTING =RouterModule.forRoot(APP_ROUTES);