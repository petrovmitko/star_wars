import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { CardMainComponent } from './components/card-main/card-main.component';
import { HomeComponent } from './pages/home/home.component';
import { CharactersComponent } from './pages/characters/characters.component';
import { FilmsComponent } from './pages/films/films.component';
import { SpeciesComponent } from './pages/species/species.component';
import { StarshipsComponent } from './pages/starships/starships.component';
import { VehiclesComponent } from './pages/vehicles/vehicles.component';
import { PlanetsComponent } from './pages/planets/planets.component';
import { AppRoutingModule } from './app-routing.module';
import { StoreModule } from '@ngrx/store';
import { swReducer } from './store/reducers/sw.reducer';
import { EffectsModule } from '@ngrx/effects';
import { SwEffects } from './store/effects/sw.effects';
import { LoaderComponent } from './components/loader/loader.component';
import { BreadcrumbsComponent } from './components/breadcrumbs/breadcrumbs.component';
import { CharacterDetailsPageComponent } from './pages/character-details-page/character-details-page.component';
import { RotationLoaderComponent } from './components/rotation-loader/rotation-loader.component';
import { PlanetDetailsPageComponent } from './pages/planet-details-page/planet-details-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CardMainComponent,
    HomeComponent,
    CharactersComponent,
    FilmsComponent,
    SpeciesComponent,
    StarshipsComponent,
    VehiclesComponent,
    PlanetsComponent,
    LoaderComponent,
    BreadcrumbsComponent,
    CharacterDetailsPageComponent,
    RotationLoaderComponent,
    PlanetDetailsPageComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    StoreModule.forRoot({sw: swReducer}),
    EffectsModule.forRoot([SwEffects]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
