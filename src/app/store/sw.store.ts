import { Store, createFeatureSelector, createSelector } from "@ngrx/store";
import { ICharacters, ICharactersData } from "../models/characters.interfaces";
import { take } from "rxjs";

export interface IAppStore {
  loading: boolean;
  characters: ICharactersData;
}

export const initialState: IAppStore = { 
  loading: false,
  characters: {
    count: 0,
    next: '',
    previous: '',
    results: [],
  }
};

export const getState = (store: Store<IAppStore>): IAppStore => { 
  let state$: IAppStore = initialState;

  store 
  .select((state) => state) 
  .pipe(take(1)) 
  .subscribe((o) => (state$ = o)); 
  return state$; 
};

export const swState = createFeatureSelector<IAppStore>('sw'); 
export const selectCharacters = createSelector(swState, (state: IAppStore) => state.characters.results); 
export const getLoader = createSelector(swState, (state: IAppStore) => state.loading); 
