import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, filter, forkJoin } from 'rxjs';
import { ICharacters } from 'src/app/models/characters.interfaces';
import { IFilms } from 'src/app/models/films.interfaces';
import { IPlanets } from 'src/app/models/planets.interfaces';
import { ISpecies } from 'src/app/models/species.interfaces';
import { IStarships } from 'src/app/models/starships.interfaces';
import { IVehicles } from 'src/app/models/vehicles.interfaces';
import { CommonService } from 'src/app/services/common.service';
import { SwapiService } from 'src/app/services/swapi.service';
import { addRelatedCharacters, addRelatedPlanets, addRelatedSpecies, addRelatedStarships, addRelatedVehicles, getCurrentFilm, resetRelatedCharacters, updateLoading, updateRelatedCharactersLoading, updateRelatedPlanetsLoading, updateRelatedSpeciesLoading, updateRelatedStarshipsLoading, updateRelatedVehiclesLoading } from 'src/app/store/actions/sw.action';
import { IAppStore, getLoader, selectFilmData, selectRelatedCharacters, selectRelatedPlanets, selectRelatedSpecies, selectRelatedStarships, selectRelatedVehicle, selectrelatedCharactersLoading, selectrelatedPlanetsLoading, selectrelatedSpeciesLoading, selectrelatedStarshipsLoading, selectrelatedVehiclesLoading } from 'src/app/store/sw.store';

@Component({
  selector: 'app-film-details-page',
  templateUrl: './film-details-page.component.html',
  styleUrls: ['../character-details-page/character-details-page.component.scss']
})
export class FilmDetailsPageComponent implements OnInit {
  
  uri?: string;
  neon = '';

  sw$: Observable<IAppStore>;
  data$?: Observable<IFilms>;
  loader$?: Observable<boolean>;

  relatedCharacters$?: Observable<ICharacters[]>;
  relatedPlanets$?: Observable<IPlanets[]>;
  relatedSpecies$?: Observable<ISpecies[]>;
  relatedStarships$?: Observable<IStarships[]>;
  relatedVehicles$?: Observable<IVehicles[]>;

  relatedCharactersLoading$?: Observable<boolean>;
  relatedPlanetsLoading$?: Observable<boolean>;
  relatedSpeciesLoading$?: Observable<boolean>;
  relatedStarshipsLoading$?: Observable<boolean>;
  relatedVehiclesLoading$?: Observable<boolean>;

  constructor(
    private store: Store<{sw: IAppStore}>, 
    private router: Router,
    private swapiService: SwapiService,
    private commonService: CommonService,
    ) {
    this.sw$ = store.select('sw');
  }

  ngOnInit(): void {
    this.resetRelatedData();
    this.init();

    const id = this.router.url.split('/')[2];
    this.data$?.pipe(filter(x => this.swapiService.getId(x.url) === id))
    .subscribe((films: IFilms) => {
      this.getRelData(films);
    });
  }

  getRelData(films: IFilms): void {
    if(films.characters.length) {
      this.store.dispatch(updateRelatedCharactersLoading(true));
      this.getRelatedCharacters(films.characters);
    }
    if(films.planets.length) {
      this.store.dispatch(updateRelatedPlanetsLoading(true));
      this.getRelatedPlanets(films.planets);
    }
    if(films.vehicles.length) {
      this.store.dispatch(updateRelatedVehiclesLoading(true));
      this.getRelatedVehicles(films.vehicles);
    }
    if(films.starships.length) {
      this.store.dispatch(updateRelatedStarshipsLoading(true));
      this.getRelatedStarships(films.starships);
    }
    if(films.species.length) {
      this.store.dispatch(updateRelatedSpeciesLoading(true));
      this.getRelatedSpecies(films.species);
    }
  }

  getRelatedCharacters(charactersArr: string[]): void {
    const characters = charactersArr.map(x => {
      const id = this.swapiService.getId(x);
      return this.commonService.getCurrentCharacter(`people/${id}`);
    });
    forkJoin(characters).subscribe(result => {
      this.store.dispatch(updateRelatedCharactersLoading(false));
      this.store.dispatch(addRelatedCharacters(result));
    });
  }
  
  getRelatedPlanets(planetsArr: string[]): void {
    const films = planetsArr.map(x => {
      const id = this.swapiService.getId(x);
      return this.commonService.getCurrentPlanet(`planets/${id}`);
    });
    forkJoin(films).subscribe(result => {
      this.store.dispatch(updateRelatedPlanetsLoading(false));
      this.store.dispatch(addRelatedPlanets(result));
    });
  }

  getRelatedVehicles(vehiclesArr: string[]): void {
    const vehicles = vehiclesArr.map(x => {
      const id = this.swapiService.getId(x);
      return this.commonService.getCurrentVehicle(`vehicles/${id}`);
    });
    forkJoin(vehicles).subscribe(result => {
      this.store.dispatch(updateRelatedVehiclesLoading(false));
      this.store.dispatch(addRelatedVehicles(result));
    });
  }

  getRelatedStarships(starshipsArr: string[]): void {
    const starships = starshipsArr.map(x => {
      const id = this.swapiService.getId(x);
      return this.commonService.getCurrentStarship(`starships/${id}`);
    });
    forkJoin(starships).subscribe(result => {
      this.store.dispatch(updateRelatedStarshipsLoading(false));
      this.store.dispatch(addRelatedStarships(result));
    });
  }

  getRelatedSpecies(speciesArr: string[]): void {
    const species = speciesArr.map(x => {
      const id = this.swapiService.getId(x);
      return this.commonService.getCurrentSpecie(`species/${id}`);
    });
    forkJoin(species).subscribe(result => {
      this.store.dispatch(updateRelatedSpeciesLoading(false));
      this.store.dispatch(addRelatedSpecies(result));
    });
  }

  visitRelatedLink(url: string, section: string): void {
    const id = this.swapiService.getId(url);
    this.router.navigate([`../${section}/${id}`]);
  }

  getReleaseDate(x: string | undefined): string {
    if(x) return x.split('-').reverse().join(',');
    return '';
  }

  getId(x: string): string {
    return this.swapiService.getId(x);
  }

  resetRelatedData(): void {
    this.store.dispatch(resetRelatedCharacters());
  }

  init(): void {
    this.neon = this.swapiService.getNeonClass();
    this.uri = this.router.url.split('/').pop();
    this.store.dispatch(updateLoading(true));
    this.store.dispatch(getCurrentFilm(`films/${this.uri}`));

    this.data$ = this.store.select(selectFilmData);
    this.loader$ = this.store.select(getLoader);

    this.relatedCharacters$ = this.store.select(selectRelatedCharacters);
    this.relatedPlanets$ = this.store.select(selectRelatedPlanets);
    this.relatedSpecies$ = this.store.select(selectRelatedSpecies);
    this.relatedStarships$ = this.store.select(selectRelatedStarships);
    this.relatedVehicles$ = this.store.select(selectRelatedVehicle);

    this.relatedCharactersLoading$ = this.store.select(selectrelatedCharactersLoading);
    this.relatedPlanetsLoading$ = this.store.select(selectrelatedPlanetsLoading);
    this.relatedSpeciesLoading$ = this.store.select(selectrelatedSpeciesLoading);
    this.relatedStarshipsLoading$ = this.store.select(selectrelatedStarshipsLoading);
    this.relatedVehiclesLoading$ = this.store.select(selectrelatedVehiclesLoading);
  }
  
}

