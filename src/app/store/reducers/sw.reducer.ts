import { createReducer, on, State } from '@ngrx/store';
import { updateCharactersData, updateLoading, updateFilmsData, 
updatePlanetsData, updateSpeciesData, updateStarshipsData, 
updateVehiclesData, updateCurrentCharacter, resetCurrentCharacter, 
updateCurrentPlanet, resetCurrentPlanet, updateCurrentFilm, resetCurrentFilm,
updateCurrentSpecie, resetCurrentSpecie, updateCurrentStarship, resetCurrentStarship,
updateCurrentVehicle, resetCurrentVehicle, updateCharactersPage, updateSpeciesPage, 
updateStarshipsPage, updateVehiclesPage, updatePlanetsPage, resetRelatedFilms, addRelatedFilms, resetRelatedStarships, addRelatedStarships, resetRelatedVehicles, addRelatedVehicles } from '../actions/sw.action';
import { initialState } from '../sw.store';
import { state } from '@angular/animations';




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
  on(updateCurrentSpecie, (state, { specie }) => ({...state, currentSpecie: specie})),
  on(resetCurrentSpecie, (state) => ({...state, currentSpecie: initialState.currentSpecie})),
  on(updateCurrentStarship, (state, { starship }) => ({...state, currentStarship: starship})),
  on(resetCurrentStarship, (state) => ({...state, currentStarship: initialState.currentStarship})),
  on(updateCurrentVehicle, (state, { vehicle }) => ({...state, currentVehicle: vehicle})),
  on(resetCurrentVehicle, (state) => ({...state, currentVehicle: initialState.currentVehicle})),
  on(updateCharactersPage, (state, { page }) => ({...state, charactersPage: page})),
  on(updateSpeciesPage, (state, { page }) => ({...state, speciesPage: page})),
  on(updateStarshipsPage, (state, { page }) => ({...state, starshipsPage: page})),
  on(updateVehiclesPage, (state, { page }) => ({...state, vehiclesPage: page})),
  on(updatePlanetsPage, (state, { page }) => ({...state, planetsPage: page})),
  on(resetRelatedFilms, (state) => ({...state, relatedFilms: []})),
  on(addRelatedFilms, (state, { films }) => ({...state, relatedFilms: films })),
  on(resetRelatedStarships, (state) => ({...state, relatedStarships: []})),
  on(addRelatedStarships, (state, { starships }) => ({...state, relatedStarships: starships })),
  on(resetRelatedVehicles, (state) => ({...state, relatedVehicles: [] })),
  on(addRelatedVehicles, (state, { vehicles }) => ({...state, relatedVehicles: vehicles })),
);

