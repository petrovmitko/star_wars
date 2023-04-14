import { createReducer, on, State } from '@ngrx/store';
import { updateCharactersData, updateLoading, updateFilmsData, 
updatePlanetsData, updateSpeciesData, updateStarshipsData, updateVehiclesData } from '../actions/sw.action';
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
);

