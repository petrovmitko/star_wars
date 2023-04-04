import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { map, exhaustMap, catchError, mergeMap, switchMap, tap } from 'rxjs/operators';
import { CommonService } from 'src/app/services/common.service';
import { SwTypes } from 'src/app/store/actions/sw.action';
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
 
  constructor(
    private actions$: Actions,
    private commonService: CommonService,
    private store: Store<{sw: IAppStore}>
  ) {}
}