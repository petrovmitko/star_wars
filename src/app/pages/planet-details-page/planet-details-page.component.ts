import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { IPlanets } from 'src/app/models/planets.interfaces';
import { SwapiService } from 'src/app/services/swapi.service';
import { getCurrentPlanet, updateLoading } from 'src/app/store/actions/sw.action';
import { IAppStore, getLoader, selectPlanetData } from 'src/app/store/sw.store';

@Component({
  selector: 'app-planet-details-page',
  templateUrl: './planet-details-page.component.html',
  styleUrls: ['../character-details-page/character-details-page.component.scss']
})
export class PlanetDetailsPageComponent implements OnInit {
  uri?: string;

  neon = '';
  neonArr = ['neon-red', 'neon-blue', 'neon-green', 'neon-purple']
  
  sw$: Observable<IAppStore>;
  data$: Observable<IPlanets> | undefined;
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
    this.store.dispatch(getCurrentPlanet(`planets/${this.uri}`));

    this.data$ = this.store.select(selectPlanetData);
    this.loader$ = this.store.select(getLoader);
  }

  getRandomInt(): string {
    const randomNum = Math.floor(Math.random() * 4);
    this.neon = this.neonArr[randomNum];
    return this.neon;
  }
  
}
