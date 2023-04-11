import { createReducer, on, State } from '@ngrx/store';
import { updateCharactersData, updateLoading, updateFilmsData } from '../actions/sw.action';
import { initialState } from '../sw.store';




export const swReducer = createReducer(
  initialState,
  on(updateLoading, (state, { loading }) => ( {...state, loading })),
  on(updateCharactersData, (state, { characters }) => ({...state, characters})),
  on(updateFilmsData, (state, { films }) => ({...state, films})),
);

