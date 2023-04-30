import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, filter, forkJoin } from 'rxjs';
import { ICharacters } from 'src/app/models/characters.interfaces';
import { IFilms } from 'src/app/models/films.interfaces';
import { IVehicles } from 'src/app/models/vehicles.interfaces';
import { CommonService } from 'src/app/services/common.service';
import { SwapiService } from 'src/app/services/swapi.service';
import { addRelatedCharacters, addRelatedFilms, getCurrentVehicle, resetRelatedCharacters, resetRelatedFilms, updateLoading } from 'src/app/store/actions/sw.action';
import { IAppStore, getLoader, selectRelatedCharacters, selectRelatedFilms, selectVehicleData } from 'src/app/store/sw.store';

@Component({
  selector: 'app-vehicle-details-page',
  templateUrl: './vehicle-details-page.component.html',
  styleUrls: ['../character-details-page/character-details-page.component.scss']
})
export class VehicleDetailsPageComponent implements OnInit {
  
  uri?: string;
  neon = '';

  sw$: Observable<IAppStore>;
  data$?: Observable<IVehicles>;
  loader$?: Observable<boolean>;

  relatedFilms$?: Observable<IFilms[]>;
  relatedCharacters$?: Observable<ICharacters[]>;
  
  constructor(
    private store: Store<{sw: IAppStore}>, 
    private router: Router,
    private swapiService: SwapiService,
    private commonService: CommonService,
    ) {
    this.sw$ = store.select('sw');
  }

  ngOnInit(): void {
    this.resetRelatedData();
    this.init();

    const id = this.router.url.split('/')[2];
    this.data$?.pipe(filter(x => this.swapiService.getId(x.url) === id))
    .subscribe((vehicle: IVehicles) => {
      this.getRelData(vehicle);
    });
  }

  getRelData(vehicle: IVehicles): void {
    if(vehicle.films.length) {
      this.getRelatedFilms(vehicle.films);
    }
    if(vehicle.pilots.length) {
      this.getRelatedCharacters(vehicle.pilots);
    }
  }

  getRelatedFilms(filmArr: string[]): void {
    const films = filmArr.map(x => {
      const id = this.swapiService.getId(x);
      return this.commonService.getCurrentFilm(`films/${id}`);
    });
    forkJoin(films).subscribe(result => {
        this.store.dispatch(addRelatedFilms(result));
    });
  }

  getRelatedCharacters(charactersArr: string[]): void {
    const characters = charactersArr.map(x => {
      const id = this.swapiService.getId(x);
      return this.commonService.getCurrentCharacter(`people/${id}`);
    });
    forkJoin(characters).subscribe(result => {
      this.store.dispatch(addRelatedCharacters(result));
    });
  }

  getId(x: string): string {
    return this.swapiService.getId(x);
  }

  resetRelatedData(): void {
    this.store.dispatch(resetRelatedFilms());
    this.store.dispatch(resetRelatedCharacters());
  }

  init(): void {
    this.neon = this.swapiService.getNeonClass();
    this.uri = this.router.url.split('/').pop();
    this.store.dispatch(updateLoading(true));
    this.store.dispatch(getCurrentVehicle(`vehicles/${this.uri}`));

    this.data$ = this.store.select(selectVehicleData);
    this.loader$ = this.store.select(getLoader);

    this.relatedFilms$ = this.store.select(selectRelatedFilms);
    this.relatedCharacters$ = this.store.select(selectRelatedCharacters);
  }

}
