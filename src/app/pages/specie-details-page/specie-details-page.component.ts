import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, filter, forkJoin } from 'rxjs';
import { ICharacters } from 'src/app/models/characters.interfaces';
import { IFilms } from 'src/app/models/films.interfaces';
import { ISpecies } from 'src/app/models/species.interfaces';
import { CommonService } from 'src/app/services/common.service';
import { SwapiService } from 'src/app/services/swapi.service';
import { updateLoading, getCurrentSpecie, resetRelatedFilms, resetRelatedCharacters, addRelatedFilms, addRelatedCharacters, updateRelatedFilmsLoading, updateRelatedCharactersLoading } from 'src/app/store/actions/sw.action';
import { IAppStore, getLoader, selectRelatedCharacters, selectRelatedFilms, selectRelatedFilmsLoading, selectSpecieData, selectrelatedCharactersLoading } from 'src/app/store/sw.store';

@Component({
  selector: 'app-specie-details-page',
  templateUrl: './specie-details-page.component.html',
  styleUrls: ['../character-details-page/character-details-page.component.scss']
})
export class SpecieDetailsPageComponent implements OnInit {
  
  uri?: string;
  neon = '';

  sw$: Observable<IAppStore>;
  data$?: Observable<ISpecies>;
  loader$?: Observable<boolean>;

  relatedFilms$?: Observable<IFilms[]>;
  relatedCharacters$?: Observable<ICharacters[]>;

  relatedFilmsLoading$?: Observable<boolean>;
  relatedCharactersLoading$?: Observable<boolean>;
  
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
    .subscribe((specie: ISpecies) => {
      this.getRelData(specie);
    });
  }

  getRelData(specie: ISpecies): void {
    if(specie.films.length) {
      this.store.dispatch(updateRelatedFilmsLoading(true));
      this.getRelatedFilms(specie.films);
    }
    if(specie.people.length) {
      this.store.dispatch(updateRelatedCharactersLoading(true));
      this.getRelatedCharacters(specie.people);
    }
  }

  getRelatedFilms(filmArr: string[]): void {
    const films = filmArr.map(x => {
      const id = this.swapiService.getId(x);
      return this.commonService.getCurrentFilm(`films/${id}`);
    });
    forkJoin(films).subscribe(result => {
      this.store.dispatch(updateRelatedFilmsLoading(false));
        this.store.dispatch(addRelatedFilms(result));
    });
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

  getId(x: string): string {
    return this.swapiService.getId(x);
  }

  visitRelatedLink(url: string, section: string): void {
    const id = this.swapiService.getId(url);
    this.router.navigate([`../${section}/${id}`]);
  }
  
  resetRelatedData(): void {
    this.store.dispatch(resetRelatedFilms());
    this.store.dispatch(resetRelatedCharacters());
  }

  init(): void {
    this.neon = this.swapiService.getNeonClass();
    this.uri = this.router.url.split('/').pop();
    this.store.dispatch(updateLoading(true));
    this.store.dispatch(getCurrentSpecie(`species/${this.uri}`));

    this.data$ = this.store.select(selectSpecieData);
    this.loader$ = this.store.select(getLoader);

    this.relatedFilms$ = this.store.select(selectRelatedFilms);
    this.relatedCharacters$ = this.store.select(selectRelatedCharacters);

    this.relatedFilmsLoading$ = this.store.select(selectRelatedFilmsLoading);
    this.relatedCharactersLoading$ = this.store.select(selectrelatedCharactersLoading);
  }

}


