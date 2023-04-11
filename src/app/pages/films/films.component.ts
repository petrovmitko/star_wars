import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { updateLoading, getFilmsData } from 'src/app/store/actions/sw.action';
import { IAppStore, selectFilms, getLoader } from 'src/app/store/sw.store';
import { IFilms } from 'src/app/models/films.interfaces';

@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
  styleUrls: ['../characters/characters.component.scss']
})
export class FilmsComponent implements OnInit {

  sw$: Observable<IAppStore>;
  results$: Observable<IFilms[]> | undefined;
  loader$ : Observable<boolean> | undefined;


  constructor( private store: Store<{sw: IAppStore}> ) { 
    this.sw$ = store.select('sw');
  }

  ngOnInit(): void {
    this.store.dispatch(updateLoading(true));
    this.store.dispatch(getFilmsData(`films?page=1`));

    this.results$ = this.store.select(selectFilms);
    this.loader$ = this.store.select(getLoader);
    
  }

  getImg(x: string): string {
    let strArr = x.split('/');
    return strArr[strArr.length - 2];
  }

}
