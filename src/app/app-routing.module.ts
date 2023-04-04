import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharactersComponent } from './pages/characters/characters.component';
import { FilmsComponent } from './pages/films/films.component';
import { HomeComponent } from './pages/home/home.component';
import { PlanetsComponent } from './pages/planets/planets.component';
import { SpeciesComponent } from './pages/species/species.component';
import { StarshipsComponent } from './pages/starships/starships.component';
import { VehiclesComponent } from './pages/vehicles/vehicles.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'characters', component: CharactersComponent },
  { path: 'films', component: FilmsComponent },
  { path: 'species', component: SpeciesComponent },
  { path: 'starships', component: StarshipsComponent },
  { path: 'vehicles', component: VehiclesComponent },
  { path: 'planets', component: PlanetsComponent },
//   { path: 'details/:id', component: DetailsPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
