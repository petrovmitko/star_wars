import { Store, createFeatureSelector, createSelector } from "@ngrx/store";
import { ICharactersData } from "../models/characters.interfaces";
import { take } from "rxjs";
import { IFilmsData } from "../models/films.interfaces";
import { IPlanetsData } from "../models/planets.interfaces";
import { ISpeciesData } from "../models/species.interfaces";
import { IStarshipsData } from "../models/starships.interfaces";
import { IVehiclesData } from "../models/vehicles.interfaces";

export interface IAppStore {
  loading: boolean;
  characters: ICharactersData;
  films: IFilmsData;
  planets: IPlanetsData;
  species: ISpeciesData;
  starships: IStarshipsData;
  vehicles: IVehiclesData;
}

export const initialState: IAppStore = { 
  loading: false,
  characters: {
    count: 0,
    next: '',
    previous: '',
    results: [],
  },
  films: {
    count: 0,
    next: '',
    previous: '',
    results: [],
  },
  planets: {
    count: 0,
    next: '',
    previous: '',
    results: [],
  },
  species: {
    count: 0,
    next: '',
    previous: '',
    results: [],
  },
  starships: {
    count: 0,
    next: '',
    previous: '',
    results: [],
  },
  vehicles: {
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
export const selectFilms = createSelector(swState, (state: IAppStore) => state.films.results); 
export const selectPlanets = createSelector(swState, (state: IAppStore) => state.planets.results); 
export const selectSpecies = createSelector(swState, (state: IAppStore) => state.species.results); 
export const selectStarships = createSelector(swState, (state: IAppStore) => state.starships.results); 
export const selectVehicles = createSelector(swState, (state: IAppStore) => state.vehicles.results); 
export const getLoader = createSelector(swState, (state: IAppStore) => state.loading); 
