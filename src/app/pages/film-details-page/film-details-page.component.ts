import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { IFilms } from 'src/app/models/films.interfaces';
import { SwapiService } from 'src/app/services/swapi.service';
import { getCurrentFilm, updateLoading } from 'src/app/store/actions/sw.action';
import { IAppStore, getLoader, selectFilmData } from 'src/app/store/sw.store';

@Component({
  selector: 'app-film-details-page',
  templateUrl: './film-details-page.component.html',
  styleUrls: ['../character-details-page/character-details-page.component.scss']
})
export class FilmDetailsPageComponent implements OnInit {
  
  uri?: string;
  neon = '';

  sw$: Observable<IAppStore>;
  data$: Observable<IFilms> | undefined;
  loader$: Observable<boolean> | undefined;

  constructor(
    private store: Store<{sw: IAppStore}>, 
    private router: Router,
    private swapiService: SwapiService,
    ) {
    this.sw$ = store.select('sw');
  }

  ngOnInit(): void {
    this.neon = this.swapiService.getNeonClass();
    this.uri = this.router.url.split('/').pop();
    this.store.dispatch(updateLoading(true));
    this.store.dispatch(getCurrentFilm(`films/${this.uri}`));

    this.data$ = this.store.select(selectFilmData);
    this.loader$ = this.store.select(getLoader);
  }

  getReleaseDate(x: string | undefined): string {
    if(x) return x.split('-').reverse().join(',');
    return '';
  }
}

