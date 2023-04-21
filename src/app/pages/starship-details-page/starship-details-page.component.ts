import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { IStarships } from 'src/app/models/starships.interfaces';
import { SwapiService } from 'src/app/services/swapi.service';
import { getCurrentStarship, updateLoading } from 'src/app/store/actions/sw.action';
import { IAppStore, getLoader, selectStarshipData } from 'src/app/store/sw.store';

@Component({
  selector: 'app-starship-details-page',
  templateUrl: './starship-details-page.component.html',
  styleUrls: ['../character-details-page/character-details-page.component.scss']
})
export class StarshipDetailsPageComponent implements OnInit {
  uri?: string;

  neon = '';
  neonArr = ['neon-red', 'neon-blue', 'neon-green', 'neon-purple']
  
  sw$: Observable<IAppStore>;
  data$: Observable<IStarships> | undefined;
  loader$: Observable<boolean> | undefined;
  
  constructor(
  private store: Store<{sw: IAppStore}>, 
  private router: Router,
  private swapiService: SwapiService,
  ) { this.sw$ = store.select('sw') }

  ngOnInit(): void {
    this.uri = this.router.url.split('/').pop();
    this.store.dispatch(updateLoading(true));
    this.store.dispatch(getCurrentStarship(`starships/${this.uri}`));

    this.data$ = this.store.select(selectStarshipData);
    this.loader$ = this.store.select(getLoader);
  }

  getRandomInt(): string {
    const randomNum = Math.floor(Math.random() * 4);
    this.neon = this.neonArr[randomNum];
    return this.neon;
  }
}
