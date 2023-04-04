import { createReducer, on, State } from '@ngrx/store';
import { updateCharactersData, updateLoading } from '../actions/sw.action';
import { IAppStore } from '../sw.store';


export const initialState: IAppStore = { 
  loading: false,
  characters: {
    count: 0,
    next: '',
    previous: '',
    results: [],
  }
};

export const swReducer = createReducer(
  initialState,
  on(updateLoading, (state, { loading }) => ( {...state, loading })),
  on(updateCharactersData, (state, { characters }) => ({...state, characters}))
);

