import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { ISpecies } from 'src/app/models/species.interfaces';
import { getSpeciesData, updateLoading } from 'src/app/store/actions/sw.action';
import { IAppStore, getLoader, selectSpecies } from 'src/app/store/sw.store';

@Component({
  selector: 'app-species',
  templateUrl: './species.component.html',
  styleUrls: ['../characters/characters.component.scss']
})
export class SpeciesComponent implements OnInit {
  page = 1;
  
  sw$: Observable<IAppStore>;
  results$: Observable<ISpecies[]> | undefined;
  loader$ : Observable<boolean> | undefined;

  pageArray = [1, 2, 3, 4];

  constructor( private store: Store<{sw: IAppStore}> ) { 
    this.sw$ = store.select('sw');
  }

  ngOnInit(): void {
    this.store.dispatch(updateLoading(true));
    this.store.dispatch(getSpeciesData(`species?page=${this.page}`));

    this.results$ = this.store.select(selectSpecies);
    this.loader$ = this.store.select(getLoader);
    
    this.results$.subscribe(x => {
      console.log(x)
    })
  }

  getImg(x: string): string {
    let strArr = x.split('/');
    return strArr[strArr.length - 2];
  }

  goToNextPage(): void {
    this.store.dispatch(updateLoading(true));
    this.page++;
    this.store.dispatch(getSpeciesData(`species?page=${this.page}`));
  }
  
  goToPrevPage(): void {
    this.store.dispatch(updateLoading(true));
    this.page--;
    this.store.dispatch(getSpeciesData(`species?page=${this.page}`));
  }

  goToPage(page: number): void {
    this.store.dispatch(updateLoading(true));
    this.page = page;
    this.store.dispatch(getSpeciesData(`species?page=${this.page}`));
  }

}
