import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { IPlanets } from 'src/app/models/planets.interfaces';
import { SwapiService } from 'src/app/services/swapi.service';
import { getPlanetsData, updateLoading, updatePlanetsPage } from 'src/app/store/actions/sw.action';
import { IAppStore, getLoader, getPlanetsPage, selectPlanets } from 'src/app/store/sw.store';

@Component({
  selector: 'app-planets',
  templateUrl: './planets.component.html',
  styleUrls: ['../characters/characters.component.scss']
})
export class PlanetsComponent implements OnInit {

  page = 1;
  pageArray = [1, 2, 3, 4, 5, 6];

  sw$: Observable<IAppStore>;
  results$: Observable<IPlanets[]> | undefined;
  loader$ : Observable<boolean> | undefined;

  constructor( 
    private store: Store<{sw: IAppStore}>, 
    private swapiService: SwapiService,
  ) { 
    this.sw$ = store.select('sw');
  }

  ngOnInit(): void {
    this.store.select(getPlanetsPage).subscribe((x: number) => this.page = x);
    this.store.dispatch(updateLoading(true));
    this.store.dispatch(getPlanetsData(`planets?page=${this.page}`));

    this.results$ = this.store.select(selectPlanets);
    this.loader$ = this.store.select(getLoader);
  }

  getId(x: string): string {
    return this.swapiService.getId(x);
  }

  goToNextPage(): void {
    this.store.dispatch(updateLoading(true));
    this.page++;
    this.store.dispatch(updatePlanetsPage(this.page));
    this.store.dispatch(getPlanetsData(`planets?page=${this.page}`));
  }
  
  goToPrevPage(): void {
    this.store.dispatch(updateLoading(true));
    this.page--;
    this.store.dispatch(updatePlanetsPage(this.page));
    this.store.dispatch(getPlanetsData(`planets?page=${this.page}`));
  }

  goToPage(page: number): void {
    if(page === this.page) return;
    this.store.dispatch(updateLoading(true));
    this.page = page;
    this.store.dispatch(updatePlanetsPage(this.page));
    this.store.dispatch(getPlanetsData(`planets?page=${this.page}`));
  }

  openDetailsPage(url: string): void {
    this.swapiService.openDetailsPage(url, 'planets');
  }

}
