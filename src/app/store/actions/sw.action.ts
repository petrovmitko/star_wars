import { createAction } from '@ngrx/store';
import { ICharactersData } from 'src/app/models/characters.interfaces';
import { IFilmsData } from 'src/app/models/films.interfaces';
import { IPlanetsData } from 'src/app/models/planets.interfaces';

export enum SwTypes {
    UPDATE_LOADING = '[LOADING] Update Loading',
    GET_CHARACTERS = '[CHARACTERS] Get Characters',
    UPDATE_CHARACTERS = '[CHARACTERS] Update Characters',
    GET_FILMS = '[FILMS] Get Films',
    UPDATE_FILMS = '[FILMS] Update Films',
    GET_PLANETS = '[PLANETS] Get Planets',
    UPDATE_PLANETS = '[PLANETS] Update Planets',
}

export const updateLoading = createAction(SwTypes.UPDATE_LOADING, (loading: boolean) => ({ loading }));

export const getCharactersData = createAction(SwTypes.GET_CHARACTERS, (uri: string) => ({ uri }));

export const updateCharactersData = createAction(SwTypes.UPDATE_CHARACTERS, 
(characters: ICharactersData) => ({ characters }));

export const getFilmsData = createAction(SwTypes.GET_FILMS, (uri: string) => ({ uri }));

export const updateFilmsData = createAction(SwTypes.UPDATE_FILMS, 
(films: IFilmsData) => ({ films }));
    
export const getPlanetsData = createAction(SwTypes.GET_PLANETS, (uri: string) => ({ uri }));

export const updatePlanetsData = createAction(SwTypes.UPDATE_PLANETS, 
(planets: IPlanetsData) => ({ planets }));