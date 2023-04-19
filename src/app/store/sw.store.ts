import { Store, createFeatureSelector, createSelector } from "@ngrx/store";
import { ICharacters, ICharactersData } from "../models/characters.interfaces";
import { take } from "rxjs";
import { IFilms, IFilmsData } from "../models/films.interfaces";
import { IPlanets, IPlanetsData } from "../models/planets.interfaces";
import { ISpecies, ISpeciesData } from "../models/species.interfaces";
import { IStarships, IStarshipsData } from "../models/starships.interfaces";
import { IVehicles, IVehiclesData } from "../models/vehicles.interfaces";

export interface IAppStore {
  loading: boolean;
  characters: ICharactersData;
  films: IFilmsData;
  planets: IPlanetsData;
  species: ISpeciesData;
  starships: IStarshipsData;
  vehicles: IVehiclesData;
  currentCharacter: ICharacters;
  currentPlanet: IPlanets;
  currentFilm: IFilms;
  currentSpecie: ISpecies;
  currentStarship: IStarships;
  currentVehicle: IVehicles;
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
  },
  currentCharacter: {
    birth_year: '',
    created: '',
    edited: '',
    eye_color: '',
    gender: '',
    hair_color: '',
    height: '',
    homeworld: '',
    mass: '',
    name: '',
    skin_color: '',
    films: [],
    starships: [],
    species: [],
    url: '',
    vehicles: [],
  },
  currentPlanet: {
    name: '',
    rotation_period: '',
    orbital_period: '',
    diameter: '',
    climate: '',
    gravity: '',
    terrain: '',
    surface_water: '',
    population: '',
    residents: [],
    films: [],
    created: '',
    edited: '',
    url: '',
  },
  currentFilm: {
    title: '',
    episode_id: 0,
    opening_crawl: '',
    director: '',
    producer: '',
    release_date: '',
    characters: [],
    planets: [],
    starships: [],
    vehicles: [],
    species: [],
    created: '',
    edited: '',
    url: '',
  },
  currentSpecie: {
    name: '',
    classification: 0,
    designation: '',
    average_height: '',
    skin_colors: '',
    hair_colors: '',
    eye_colors: '',
    average_lifespan: '',
    homeworld: '',
    language: '',
    films: [],
    people: [],
    created: '',
    edited: '',
    url: '',
  },
  currentStarship: {
    name: '',
    model: 0,
    manufacturer: '',
    cost_in_credits: '',
    length: '',
    max_atmosphering_speed: '',
    crew: '',
    passengers: '',
    cargo_capacity: '',
    consumables: '',
    hyperdrive_rating: '',
    MGLT: '',
    starship_class: '',
    pilots: [],
    films: [],
    created: '',
    edited: '',
    url: '',
  },
  currentVehicle: {
    name: '',
    model: 0,
    manufacturer: '',
    cost_in_credits: '',
    length: '',
    max_atmosphering_speed: '',
    crew: '',
    passengers: '',
    cargo_capacity: '',
    consumables: '',
    vehicle_class: '',
    pilots: [],
    films: [],
    created: '',
    edited: '',
    url: '',
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

export const selectCharacterData = createSelector(swState, (state: IAppStore) => state.currentCharacter); 
export const selectPlanetData = createSelector(swState, (state: IAppStore) => state.currentPlanet);

export const selectFilmData = createSelector(swState, (state: IAppStore) => state.currentFilm);  
export const selectSpecieData = createSelector(swState, (state: IAppStore) => state.currentSpecie); 
export const selectStarshipData = createSelector(swState, (state: IAppStore) => state.currentStarship); 
export const selectVehicleData = createSelector(swState, (state: IAppStore) => state.currentVehicle); 
export const getLoader = createSelector(swState, (state: IAppStore) => state.loading); 
