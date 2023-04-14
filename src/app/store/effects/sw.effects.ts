import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { catchError, mergeMap, switchMap } from 'rxjs/operators';
import { CommonService } from 'src/app/services/common.service';
import { SwTypes, updateFilmsData, updatePlanetsData, updateSpeciesData, updateStarshipsData, updateVehiclesData } from 'src/app/store/actions/sw.action';
import { updateLoading, updateCharactersData } from 'src/app/store/actions/sw.action';
import { IAppStore } from '../sw.store';
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

  constructor(
    private actions$: Actions,
    private commonService: CommonService,
    private store: Store<{sw: IAppStore}>
  ) {}
}