import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { updateLoading, getFilmsData } from 'src/app/store/actions/sw.action';
import { IAppStore, selectFilms, getLoader } from 'src/app/store/sw.store';
import { IFilms } from 'src/app/models/films.interfaces';
import { SwapiService } from 'src/app/services/swapi.service';

@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
  styleUrls: ['../characters/characters.component.scss']
})
export class FilmsComponent implements OnInit {

  sw$: Observable<IAppStore>;
  results$: Observable<IFilms[]> | undefined;
  loader$ : Observable<boolean> | undefined;


  constructor( private store: Store<{sw: IAppStore}>, private swapiService: SwapiService ) { 
    this.sw$ = store.select('sw');
  }

  ngOnInit(): void {
    this.store.dispatch(updateLoading(true));
    this.store.dispatch(getFilmsData(`films?page=1`));

    this.results$ = this.store.select(selectFilms);
    this.loader$ = this.store.select(getLoader);
  }

  getImg(x: string): string {
    return this.swapiService.getImg(x);
  }

  openDetailsPage(url: string): void {
    this.swapiService.openDetailsPage(url, 'films');
  }

}
