import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { catchError, mergeMap, switchMap } from 'rxjs/operators';
import { CommonService } from 'src/app/services/common.service';
import { SwTypes, resetCurrentCharacter, resetCurrentFilm, resetCurrentPlanet, resetCurrentStarship, resetCurrentVehicle, 
updateCurrentSpecie, updateCurrentCharacter, updateCurrentFilm, updateCurrentPlanet, updateCurrentStarship, 
updateCurrentVehicle, updateFilmsData, updatePlanetsData, updateSpeciesData, updateStarshipsData, updateVehiclesData } from 'src/app/store/actions/sw.action';
import { updateLoading, updateCharactersData } from 'src/app/store/actions/sw.action';
import { IAppStore } from '../sw.store';
import { ISpecies } from 'src/app/models/species.interfaces';
@Injectable()
export class SwEffects {
 
  getCharacters$ = createEffect(() => this.actions$.pipe(
    ofType(SwTypes.GET_CHARACTERS),
    switchMap(({uri}) => this.commonService.getPeople(uri)
      .pipe(
        mergeMap((characters) => {
            return [
            updateCharactersData(characters),
            updateLoading(false),
            ];
        }),
        catchError((err) => {
            return [updateLoading(false)]; 
        }),
      )),
    )
  );

  getFilms$ = createEffect(() => this.actions$.pipe(
    ofType(SwTypes.GET_FILMS),
    switchMap(({uri}) => this.commonService.getFilms(uri)
      .pipe(
        mergeMap((films) => {
            return [
            updateFilmsData(films),
            updateLoading(false),
            ];
        }),
        catchError((err) => {
            return [updateLoading(false)]; 
        }),
      )),
    )
  );

  getPlanets$ = createEffect(() => this.actions$.pipe(
    ofType(SwTypes.GET_PLANETS),
    switchMap(({uri}) => this.commonService.getPlanets(uri)
      .pipe(
        mergeMap((planets) => {
            return [
            updatePlanetsData(planets),
            updateLoading(false),
            ];
        }),
        catchError((err) => {
            return [updateLoading(false)]; 
        }),
      )),
    )
  );

  getSpecies$ = createEffect(() => this.actions$.pipe(
    ofType(SwTypes.GET_SPECIES),
    switchMap(({uri}) => this.commonService.getSpecies(uri)
      .pipe(
        mergeMap((species) => {
            return [
            updateSpeciesData(species),
            updateLoading(false),
            ];
        }),
        catchError((err) => {
            return [updateLoading(false)]; 
        }),
      )),
    )
  );
 
  getStarships$ = createEffect(() => this.actions$.pipe(
    ofType(SwTypes.GET_STARSHIPS),
    switchMap(({uri}) => this.commonService.getStarships(uri)
      .pipe(
        mergeMap((starships) => {
            return [
            updateStarshipsData(starships),
            updateLoading(false),
            ];
        }),
        catchError((err) => {
            return [updateLoading(false)]; 
        }),
      )),
    )
  );

  getVehicles$ = createEffect(() => this.actions$.pipe(
    ofType(SwTypes.GET_VEHICLES),
    switchMap(({uri}) => this.commonService.getVehicles(uri)
      .pipe(
        mergeMap((vehicles) => {
            return [
            updateVehiclesData(vehicles),
            updateLoading(false),
            ];
        }),
        catchError((err) => {
            return [updateLoading(false)]; 
        }),
      )),
    )
  );

  getCurrentCharacter$ = createEffect(() => this.actions$.pipe(
    ofType(SwTypes.GET_CURRENT_CHARACTER),
    switchMap(({uri}) => this.commonService.getCurrentCharacter(uri)
      .pipe(
        mergeMap((character) => {
            return [
              resetCurrentCharacter(),
              updateCurrentCharacter(character),
              updateLoading(false),
            ];
        }),
        catchError((err) => {
            return [updateLoading(false)]; 
        }),
      )),
    )
  );

  getCurrentPlanet$ = createEffect(() => this.actions$.pipe(
    ofType(SwTypes.GET_CURRENT_PLANET),
    switchMap(({uri}) => this.commonService.getCurrentPlanet(uri)
      .pipe(
        mergeMap((planet) => {
            return [
              resetCurrentPlanet(),
              updateCurrentPlanet(planet),
              updateLoading(false),
            ];
        }),
        catchError((err) => {
            return [updateLoading(false)]; 
        }),
      )),
    )
  );

  getCurrentFilm$ = createEffect(() => this.actions$.pipe(
    ofType(SwTypes.GET_CURRENT_FILM),
    switchMap(({uri}) => this.commonService.getCurrentFilm(uri)
      .pipe(
        mergeMap((film) => {
            return [
              resetCurrentFilm(),
              updateCurrentFilm(film),
              updateLoading(false),
            ];
        }),
        catchError((err) => {
            return [updateLoading(false)]; 
        }),
      )),
    )
  );

  getCurrentSpecie$ = createEffect(() => this.actions$.pipe(
    ofType(SwTypes.GET_CURRENT_SPECIE),
    switchMap(({uri}) => this.commonService.getCurrentSpecie(uri)
      .pipe(
        mergeMap((specie) => {
            return [
              resetCurrentVehicle(),
              updateCurrentSpecie(specie),
              updateLoading(false),
            ];
        }),
        catchError((err) => {
            return [updateLoading(false)]; 
        }),
      )),
    )
  );

  getCurrentStarship$ = createEffect(() => this.actions$.pipe(
    ofType(SwTypes.GET_CURRENT_STARSHIP),
    switchMap(({uri}) => this.commonService.getCurrentStarship(uri)
      .pipe(
        mergeMap((starship) => {
            return [
              resetCurrentStarship(),
              updateCurrentStarship(starship),
              updateLoading(false),
            ];
        }),
        catchError((err) => {
            return [updateLoading(false)]; 
        }),
      )),
    )
  );

  getCurrentVehicle$ = createEffect(() => this.actions$.pipe(
    ofType(SwTypes.GET_CURRENT_VEHICLE),
    switchMap(({uri}) => this.commonService.getCurrentVehicle(uri)
      .pipe(
        mergeMap((vehicle) => {
            return [
              resetCurrentVehicle(),
              updateCurrentVehicle(vehicle),
              updateLoading(false),
            ];
        }),
        catchError((err) => {
            return [updateLoading(false)]; 
        }),
      )),
    )
  );

  constructor(
    private actions$: Actions,
    private commonService: CommonService,
    private store: Store<{sw: IAppStore}>
  ) {}
}


