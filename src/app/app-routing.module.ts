import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharactersComponent } from './pages/characters/characters.component';
import { FilmsComponent } from './pages/films/films.component';
import { HomeComponent } from './pages/home/home.component';
import { PlanetsComponent } from './pages/planets/planets.component';
import { SpeciesComponent } from './pages/species/species.component';
import { StarshipsComponent } from './pages/starships/starships.component';
import { VehiclesComponent } from './pages/vehicles/vehicles.component';
import { CharacterDetailsPageComponent } from './pages/character-details-page/character-details-page.component';
import { PlanetDetailsPageComponent } from './pages/planet-details-page/planet-details-page.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent, data: { breadcrumb: 'Home' }},
  { path: 'characters', data: { breadcrumb: 'Characters' },
  children: [
      {path: '', component: CharactersComponent, data: { breadcrumb: '' }},
      { path: ':id', component: CharacterDetailsPageComponent, data: { breadcrumb: 'Details'}},
  ]},
  { path: 'films',  data: { breadcrumb: 'Films' }, 
  children: [
    {path: '', component: FilmsComponent, data: { breadcrumb: ''}},
  ]},
  { path: 'species', component: SpeciesComponent, data: { breadcrumb: 'Species' } },
  { path: 'starships', component: StarshipsComponent, data: { breadcrumb: 'Starships' } },
  { path: 'vehicles', component: VehiclesComponent, data: { breadcrumb: 'Vehicles' } },
  { path: 'planets', data: { breadcrumb: 'Planets' }, 
  children: [
    {path: '',  component: PlanetsComponent, data: { breadcrumb: '' }},
    { path: ':id', component: PlanetDetailsPageComponent, data: { breadcrumb: 'Details'}},
  ]},
  { 
    path: '', 
    redirectTo: 'home',
    pathMatch: 'full',
  },
  { 
    path: '**', 
    redirectTo: 'home',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
