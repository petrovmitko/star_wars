import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, filter } from 'rxjs';
import { ICharacters } from 'src/app/models/characters.interfaces';
import { IPlanets } from 'src/app/models/planets.interfaces';
import { SwapiService } from 'src/app/services/swapi.service';
import { getCurrentCharacter, getCurrentPlanet, updateLoading } from 'src/app/store/actions/sw.action';
import { IAppStore, getLoader, selectCharacterData, selectPlanetData } from 'src/app/store/sw.store';

@Component({
  selector: 'app-character-details-page',
  templateUrl: './character-details-page.component.html',
  styleUrls: ['./character-details-page.component.scss']
})
export class CharacterDetailsPageComponent implements OnInit {

  uri?: string;

  planet?: string;
  neon = '';
  neonArr = ['neon-red', 'neon-blue', 'neon-green', 'neon-purple']
  
  sw$: Observable<IAppStore>;
  data$: Observable<ICharacters> | undefined;
  loader$: Observable<boolean> | undefined;
  planet$: Observable<IPlanets> | undefined;

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
    this.store.dispatch(getCurrentCharacter(`people/${this.uri}`));

    this.data$ = this.store.select(selectCharacterData);
    this.planet$ = this.store.select(selectPlanetData);
    this.loader$ = this.store.select(getLoader);
    this.data$.pipe(filter(x => x.name !== undefined)).subscribe((character: ICharacters) => {
      if(character.homeworld) {
        const planetUri = this.swapiService.getImg(character.homeworld);
        this.store.dispatch(getCurrentPlanet(`planets/${planetUri}`));
      }
    });
  }


  getRandomInt(): string {
    const randomNum = Math.floor(Math.random() * 4);
    this.neon = this.neonArr[randomNum];
    return this.neon;
  }

}
