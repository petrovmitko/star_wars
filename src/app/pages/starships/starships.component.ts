import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { IStarships } from 'src/app/models/starships.interfaces';
import { SwapiService } from 'src/app/services/swapi.service';
import { getStarshipsData, updateLoading } from 'src/app/store/actions/sw.action';
import { IAppStore, getLoader, selectStarships } from 'src/app/store/sw.store';

@Component({
  selector: 'app-starships',
  templateUrl: './starships.component.html',
  styleUrls: ['../characters/characters.component.scss']
})
export class StarshipsComponent implements OnInit {
  page = 1;
  pageArray = [1, 2, 3, 4];

  sw$: Observable<IAppStore>;
  results$: Observable<IStarships[]> | undefined;
  loader$ : Observable<boolean> | undefined;

  constructor( private store: Store<{sw: IAppStore}>, private swapiService: SwapiService) { 
    this.sw$ = store.select('sw');
  }

  ngOnInit(): void {
    this.store.dispatch(updateLoading(true));
    this.store.dispatch(getStarshipsData(`starships?page=1`));

    this.results$ = this.store.select(selectStarships);
    this.loader$ = this.store.select(getLoader);

    this.results$.subscribe(d => {
      console.log(d);
    });
  }

  getImg(x: string): string {
    return this.swapiService.getImg(x);
  }

  goToNextPage(): void {
    this.store.dispatch(updateLoading(true));
    this.page++;
    this.store.dispatch(getStarshipsData(`starships?page=${this.page}`));
  }
  
  goToPrevPage(): void {
    this.store.dispatch(updateLoading(true));
    this.page--;
    this.store.dispatch(getStarshipsData(`starships?page=${this.page}`));
  }

  goToPage(page: number): void {
    this.store.dispatch(updateLoading(true));
    this.page = page;
    this.store.dispatch(getStarshipsData(`starships?page=${this.page}`));
  }

}
