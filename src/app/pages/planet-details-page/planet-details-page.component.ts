import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, filter, forkJoin } from 'rxjs';
import { ICharacters } from 'src/app/models/characters.interfaces';
import { IFilms } from 'src/app/models/films.interfaces';
import { IPlanets } from 'src/app/models/planets.interfaces';
import { CommonService } from 'src/app/services/common.service';
import { SwapiService } from 'src/app/services/swapi.service';
import { addRelatedCharacters, addRelatedFilms, getCurrentPlanet, resetRelatedCharacters, resetRelatedFilms, updateLoading } from 'src/app/store/actions/sw.action';
import { IAppStore, getLoader, selectPlanetData, selectRelatedCharacters, selectRelatedFilms } from 'src/app/store/sw.store';

@Component({
  selector: 'app-planet-details-page',
  templateUrl: './planet-details-page.component.html',
  styleUrls: ['../character-details-page/character-details-page.component.scss']
})
export class PlanetDetailsPageComponent implements OnInit {
  
  uri?: string;
  neon = '';

  sw$: Observable<IAppStore>;
  data$: Observable<IPlanets> | undefined;
  loader$: Observable<boolean> | undefined;

  relatedFilms$?: Observable<IFilms[]>;
  residents$?: Observable<ICharacters[]>;

  constructor(
    private store: Store<{sw: IAppStore}>, 
    private router: Router,
    private swapiService: SwapiService,
    private commonService: CommonService
    ) {
    this.sw$ = store.select('sw');
  }

  ngOnInit(): void {
    this.resetRelatedData();
    this.init();

    const id = this.router.url.split('/')[2];
    this.data$?.pipe(filter(x => this.swapiService.getId(x.url) === id))
    .subscribe((planet: IPlanets) => {
      this.getRelData(planet);
    });
  }
  
  getRelData(planet: IPlanets): void {
    if(planet.films.length) {
      this.getRelatedFilms(planet.films);
    }
    if(planet.residents.length) {
      this.getRelatedCharacters(planet.residents);
    }
  }

  getRelatedFilms(filmArr: string[]): void {
    const films = filmArr.map(x => {
      const id = this.swapiService.getId(x);
      return this.commonService.getCurrentFilm(`films/${id}`);
    });
    forkJoin(films).subscribe(result => {
        this.store.dispatch(addRelatedFilms(result));
    });
  }

  getRelatedCharacters(charactersArr: string[]): void {
    const residents = charactersArr.map(x => {
      const id = this.swapiService.getId(x);
      return this.commonService.getCurrentCharacter(`people/${id}`);
    });
    forkJoin(residents).subscribe(result => {
      this.store.dispatch(addRelatedCharacters(result));
    });
  }

  getId(x: string): string {
    return this.swapiService.getId(x);
  }

  resetRelatedData(): void {
    this.store.dispatch(resetRelatedFilms());
    this.store.dispatch(resetRelatedCharacters());
  }

  init(): void {
    this.neon = this.swapiService.getNeonClass();
    this.uri = this.router.url.split('/').pop();
    this.store.dispatch(updateLoading(true));
    this.store.dispatch(getCurrentPlanet(`planets/${this.uri}`));

    this.data$ = this.store.select(selectPlanetData);
    this.loader$ = this.store.select(getLoader);

    this.relatedFilms$ = this.store.select(selectRelatedFilms);
    this.residents$ = this.store.select(selectRelatedCharacters);
  }
}
