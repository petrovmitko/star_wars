import { createReducer, on, State } from '@ngrx/store';
import { updateLoading } from '../actions/sw.action';
import { IAppStore } from '../sw.store';


export const initialState: IAppStore = { 
  loading: false,
  characters: []
};

export const swReducer = createReducer(
  initialState,
  on(updateLoading, (state, { loading }) => ( {...state, loading })),
);

