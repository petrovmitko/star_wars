import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { ISpecies } from 'src/app/models/species.interfaces';
import { SwapiService } from 'src/app/services/swapi.service';
import { updateLoading, getCurrenSpecie } from 'src/app/store/actions/sw.action';
import { IAppStore, getLoader, selectSpecieData } from 'src/app/store/sw.store';

@Component({
  selector: 'app-specie-details-page',
  templateUrl: './specie-details-page.component.html',
  styleUrls: ['../character-details-page/character-details-page.component.scss']
})
export class SpecieDetailsPageComponent implements OnInit {
  uri?: string;
  
  sw$: Observable<IAppStore>;
  data$: Observable<ISpecies> | undefined;
  loader$: Observable<boolean> | undefined;
  
  constructor(
    private store: Store<{sw: IAppStore}>, 
    private router: Router,
    private swapiService: SwapiService,
    ) {
    this.sw$ = store.select('sw');
  }

  ngOnInit(): void {
    this.uri = this.router.url.split('/').pop();
    this.store.dispatch(updateLoading(true));
    this.store.dispatch(getCurrenSpecie(`species/${this.uri}`));

    this.data$ = this.store.select(selectSpecieData);
    this.loader$ = this.store.select(getLoader);
    this.data$.subscribe(d => {
      console.log(d)
    })
  }

  getRandomInt(): string {
    return this.swapiService.getRandomInt();
  }

}


