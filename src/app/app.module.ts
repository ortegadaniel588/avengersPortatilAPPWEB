import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//rutas
import { APP_ROUTING } from './app.routes'

//servicios

//compnentes

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/componentes/home/home.component';
import { HeroesComponent } from './components/componentes/heroes/heroes.component';
import { NosotrosComponent } from './components/componentes/nosotros/nosotros.component';
import { HistoriaComponent } from './components/componentes/historia/historia.component';
import { FooterComponent } from './components/componentes/footer/footer.component';
import { NabvarComponent } from './components/componentes/nabvar/nabvar.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeroesComponent,
    NosotrosComponent,
    HistoriaComponent,
    FooterComponent,
    NabvarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
