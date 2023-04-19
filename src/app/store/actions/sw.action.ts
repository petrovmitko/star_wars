import { createAction } from '@ngrx/store';
import { ICharacters, ICharactersData } from 'src/app/models/characters.interfaces';
import { IFilms, IFilmsData } from 'src/app/models/films.interfaces';
import { IPlanets, IPlanetsData } from 'src/app/models/planets.interfaces';
import { ISpeciesData } from 'src/app/models/species.interfaces';
import { IStarshipsData } from 'src/app/models/starships.interfaces';
import { IVehiclesData } from 'src/app/models/vehicles.interfaces';

export enum SwTypes {
    UPDATE_LOADING = '[LOADING] Update Loading',
    GET_CHARACTERS = '[CHARACTERS] Get Characters',
    UPDATE_CHARACTERS = '[CHARACTERS] Update Characters',
    GET_FILMS = '[FILMS] Get Films',
    UPDATE_FILMS = '[FILMS] Update Films',
    GET_PLANETS = '[PLANETS] Get Planets',
    UPDATE_PLANETS = '[PLANETS] Update Planets',
    GET_SPECIES = '[SPECIES] Get Species',
    UPDATE_SPECIES = '[SPECIES] Update Species',
    GET_STARSHIPS = '[STARSHIPS] Get Starships',
    UPDATE_STARSHIPS = '[STARSHIPS] Update Starships',
    GET_VEHICLES = '[VEHICLES] Get Vehicles',
    UPDATE_VEHICLES = '[VEHICLES] Update Vehicles',
    // //////////
    GET_CURRENT_CHARACTER = '[CHARACTER] Get Current Character',
    RESET_CURRENT_CHARACTER = '[CHARACTER] Reset Current Character',
    UPDATE_CURRENT_CHARACTER = '[CHARACTER] Update Current Character',
    GET_CURRENT_PLANET = '[PLANET] Get Current Planet',
    RESET_CURRENT_PLANET = '[PLANET] Reset Current Planet',
    UPDATE_CURRENT_PLANET = '[PLANET] Update Current Planet',
    GET_CURRENT_FILM = '[FILM] Get Current Film',
    RESET_CURRENT_FILM = '[FILM] Reset Current Film',
    UPDATE_CURRENT_FILM = '[FILM] Update Current Film',
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

export const getSpeciesData = createAction(SwTypes.GET_SPECIES, (uri: string) => ({ uri }));

export const updateSpeciesData = createAction(SwTypes.UPDATE_SPECIES, 
(species: ISpeciesData) => ({ species }));

export const getStarshipsData = createAction(SwTypes.GET_STARSHIPS, (uri: string) => ({ uri }));

export const updateStarshipsData = createAction(SwTypes.UPDATE_STARSHIPS, 
(starships: IStarshipsData) => ({ starships }));

export const getVehiclesData = createAction(SwTypes.GET_VEHICLES, (uri: string) => ({ uri }));

export const updateVehiclesData = createAction(SwTypes.UPDATE_VEHICLES, 
(vehicles: IVehiclesData) => ({ vehicles }));

// //////////////

export const getCurrentCharacter = createAction(SwTypes.GET_CURRENT_CHARACTER, (uri: string) => ({ uri }));

export const updateCurrentCharacter = createAction(SwTypes.UPDATE_CURRENT_CHARACTER, 
(character: ICharacters) => ({ character }));

export const resetCurrentCharacter = createAction(SwTypes.RESET_CURRENT_CHARACTER);

export const getCurrentPlanet = createAction(SwTypes.GET_CURRENT_PLANET, (uri: string) => ({ uri }));

export const updateCurrentPlanet = createAction(SwTypes.UPDATE_CURRENT_PLANET, 
(planet: IPlanets) => ({ planet }));

export const resetCurrentPlanet = createAction(SwTypes.RESET_CURRENT_PLANET);

export const getCurrentFilm = createAction(SwTypes.GET_CURRENT_FILM, (uri: string) => ({ uri }));

export const updateCurrentFilm = createAction(SwTypes.UPDATE_CURRENT_FILM, 
(film: IFilms) => ({ film }));

export const resetCurrentFilm = createAction(SwTypes.RESET_CURRENT_FILM);