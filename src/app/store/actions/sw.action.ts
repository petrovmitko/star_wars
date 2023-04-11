import { createAction } from '@ngrx/store';
import { ICharactersData } from 'src/app/models/characters.interfaces';
import { IFilmsData } from 'src/app/models/films.interfaces';

export enum SwTypes {
    UPDATE_LOADING = '[LOADING] Update Loading',
    GET_CHARACTERS = '[CHARACTERS] Get Characters',
    UPDATE_CHARACTERS = '[CHARACTERS] Update Characters',
    GET_FILMS = '[FILMS] Get Films',
    UPDATE_FILMS = '[FILMS] Update Films',
}

export const updateLoading = createAction(SwTypes.UPDATE_LOADING, (loading: boolean) => ({ loading }));

export const getCharactersData = createAction(SwTypes.GET_CHARACTERS, (uri: string) => ({ uri }));

export const updateCharactersData = createAction(SwTypes.UPDATE_CHARACTERS, 
    (characters: ICharactersData) => ({ characters }));

export const getFilmsData = createAction(SwTypes.GET_FILMS, (uri: string) => ({ uri }));

export const updateFilmsData = createAction(SwTypes.UPDATE_FILMS, 
    (films: IFilmsData) => ({ films }));