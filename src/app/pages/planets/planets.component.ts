import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { IPlanets } from 'src/app/models/planets.interfaces';
import { getPlanetsData, updateLoading } from 'src/app/store/actions/sw.action';
import { IAppStore, getLoader, selectPlanets } from 'src/app/store/sw.store';

@Component({
  selector: 'app-planets',
  templateUrl: './planets.component.html',
  styleUrls: ['./planets.component.scss']
})
export class PlanetsComponent implements OnInit {

  sw$: Observable<IAppStore>;
  results$: Observable<IPlanets[]> | undefined;
  loader$ : Observable<boolean> | undefined;

  constructor( private store: Store<{sw: IAppStore}> ) { 
    this.sw$ = store.select('sw');
  }

  ngOnInit(): void {
    this.store.dispatch(updateLoading(true));
    this.store.dispatch(getPlanetsData(`planets?page=1`));

    this.results$ = this.store.select(selectPlanets);
    this.loader$ = this.store.select(getLoader);

    this.results$.subscribe(d => {
      console.log(d);
    });
  }

}
