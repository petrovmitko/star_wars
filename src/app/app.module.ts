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
import { FilmDetailsPageComponent } from './pages/film-details-page/film-details-page.component';
import { SpecieDetailsPageComponent } from './pages/specie-details-page/specie-details-page.component';
import { StarshipDetailsPageComponent } from './pages/starship-details-page/starship-details-page.component';
import { VehicleDetailsPageComponent } from './pages/vehicle-details-page/vehicle-details-page.component';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { RelatedSectionLoaderComponent } from './components/related-section-loader/related-section-loader.component';

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
    FilmDetailsPageComponent,
    SpecieDetailsPageComponent,
    StarshipDetailsPageComponent,
    VehicleDetailsPageComponent,
    RelatedSectionLoaderComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    StoreModule.forRoot({sw: swReducer}),
    EffectsModule.forRoot([SwEffects]),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
