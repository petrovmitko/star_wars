import { createReducer, on, State } from '@ngrx/store';
import { updateCharactersData, updateLoading, updateFilmsData, 
updatePlanetsData, updateSpeciesData, updateStarshipsData, 
updateVehiclesData, updateCurrentCharacter, resetCurrentCharacter, 
updateCurrentPlanet, resetCurrentPlanet, updateCurrentFilm, resetCurrentFilm } from '../actions/sw.action';
import { initialState } from '../sw.store';




export const swReducer = createReducer(
  initialState,
  on(updateLoading, (state, { loading }) => ( {...state, loading })),
  on(updateCharactersData, (state, { characters }) => ({...state, characters})),
  on(updateFilmsData, (state, { films }) => ({...state, films})),
  on(updatePlanetsData, (state, { planets }) => ({...state, planets})),
  on(updateSpeciesData, (state, { species }) => ({...state, species})),
  on(updateStarshipsData, (state, { starships }) => ({...state, starships})),
  on(updateVehiclesData, (state, { vehicles }) => ({...state, vehicles})),
  on(updateCurrentCharacter, (state, { character }) => ({...state, currentCharacter: character})),
  on(resetCurrentCharacter, (state) => ({...state, currentCharacter: initialState.currentCharacter})),
  on(updateCurrentPlanet, (state, { planet }) => ({...state, currentPlanet: planet})),
  on(resetCurrentPlanet, (state) => ({...state, currentPlanet: initialState.currentPlanet})),
  on(updateCurrentFilm, (state, { film }) => ({...state, currentFilm: film})),
  on(resetCurrentFilm, (state) => ({...state, currentFilm: initialState.currentFilm})),
);

