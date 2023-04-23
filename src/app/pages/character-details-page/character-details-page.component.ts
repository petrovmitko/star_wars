import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, filter, take } from 'rxjs';
import { ICharacters } from 'src/app/models/characters.interfaces';
import { IPlanets } from 'src/app/models/planets.interfaces';
import { ISpecies } from 'src/app/models/species.interfaces';
import { SwapiService } from 'src/app/services/swapi.service';
import { getCurrentCharacter, getCurrentPlanet, getCurrentSpecie, updateLoading } from 'src/app/store/actions/sw.action';
import { IAppStore, getLoader, selectCharacterData, selectPlanetData, selectSpecieData } from 'src/app/store/sw.store';

@Component({
  selector: 'app-character-details-page',
  templateUrl: './character-details-page.component.html',
  styleUrls: ['./character-details-page.component.scss']
})
export class CharacterDetailsPageComponent implements OnInit {

  uri?: string;
  neon = '';
  relatedData = ['Films', 'Vehicles', 'Starships'];
  
  sw$: Observable<IAppStore>;
  data$?: Observable<ICharacters>;
  loader$?: Observable<boolean>;
  planet$?: Observable<IPlanets>;
  specie$?: Observable<ISpecies>;

  constructor(
    private store: Store<{sw: IAppStore}>, 
    private router: Router,
    private swapiService: SwapiService,
    ) {
    this.sw$ = store.select('sw');
  }

  ngOnInit(): void {
    this.neon = this.swapiService.getNeonClass();
    this.uri = this.router.url.split('/').pop();
    this.store.dispatch(updateLoading(true));
    this.store.dispatch(getCurrentCharacter(`people/${this.uri}`));

    this.data$ = this.store.select(selectCharacterData);
    this.planet$ = this.store.select(selectPlanetData);
    this.specie$ = this.store.select(selectSpecieData);
    this.loader$ = this.store.select(getLoader);
    
    this.data$.pipe(filter(x => x.name !== undefined)).subscribe((character: ICharacters) => {
      if(character) {
        const planetUri = this.swapiService.getId(character.homeworld);
        this.store.dispatch(getCurrentPlanet(`planets/${planetUri}`));
        const specieUri = character.species.length > 0 ? this.swapiService.getId(character.species[0]) : 1;
        this.store.dispatch(getCurrentSpecie(`species/${specieUri}`));
      }
    });
  }

  visitPlanet(): void {
    this.planet$?.pipe(take(1)).subscribe((data: IPlanets) => {
      this.router.navigate([`../planets/${this.swapiService.getId(data.url)}`]);
    });
  }

  visitSpecie(): void {
    this.specie$?.pipe(take(1)).subscribe((data: ISpecies) => {
      this.router.navigate([`../species/${this.swapiService.getId(data.url)}`]);
    });
  }
}


