import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { IPlanets } from 'src/app/models/planets.interfaces';
import { SwapiService } from 'src/app/services/swapi.service';
import { getPlanetsData, updateLoading } from 'src/app/store/actions/sw.action';
import { IAppStore, getLoader, selectPlanets } from 'src/app/store/sw.store';

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
    private router: Router,
  ) { 
    this.sw$ = store.select('sw');
  }

  ngOnInit(): void {
    this.store.dispatch(updateLoading(true));
    this.store.dispatch(getPlanetsData(`planets?page=1`));

    this.results$ = this.store.select(selectPlanets);
    this.loader$ = this.store.select(getLoader);
  }

  getImg(x: string): string {
    return this.swapiService.getImg(x);
  }

  goToNextPage(): void {
    this.store.dispatch(updateLoading(true));
    this.page++;
    this.store.dispatch(getPlanetsData(`planets?page=${this.page}`));
  }
  
  goToPrevPage(): void {
    this.store.dispatch(updateLoading(true));
    this.page--;
    this.store.dispatch(getPlanetsData(`planets?page=${this.page}`));
  }

  goToPage(page: number): void {
    if(page === this.page) return;
    this.store.dispatch(updateLoading(true));
    this.page = page;
    this.store.dispatch(getPlanetsData(`planets?page=${this.page}`));
  }

  openDetailsPage(url: string): void {
    const id = this.swapiService.getImg(url);
    this.router.navigate([`planets/${id}`]);
  }

}
