import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ICharacters, ICharactersData } from '../models/characters.interfaces';
import { IFilms, IFilmsData } from '../models/films.interfaces';
import { IPlanets, IPlanetsData } from '../models/planets.interfaces';
import { ISpecies, ISpeciesData } from '../models/species.interfaces';
import { IStarships, IStarshipsData } from '../models/starships.interfaces';
import { IVehicles, IVehiclesData } from '../models/vehicles.interfaces';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  private readonly swapiUrl = 'https://swapi.dev/api/';

  constructor(private http: HttpClient) { }

  getPeople(uri: string): Observable<ICharactersData>{
    return this.http.get<ICharactersData>(this.swapiUrl + uri);
  }

  getFilms(uri: string): Observable<IFilmsData>{
    return this.http.get<IFilmsData>(this.swapiUrl + uri);
  }

  getPlanets(uri: string): Observable<IPlanetsData>{
    return this.http.get<IPlanetsData>(this.swapiUrl + uri);
  }

  getSpecies(uri: string): Observable<ISpeciesData>{
    return this.http.get<ISpeciesData>(this.swapiUrl + uri);
  }

  getStarships(uri: string): Observable<IStarshipsData>{
    return this.http.get<IStarshipsData>(this.swapiUrl + uri);
  }

  getVehicles(uri: string): Observable<IVehiclesData>{
    return this.http.get<IVehiclesData>(this.swapiUrl + uri);
  }

  getCurrentCharacter(uri: string): Observable<ICharacters>{
    return this.http.get<ICharacters>(this.swapiUrl + uri);
  }

  getCurrentPlanet(uri: string): Observable<IPlanets>{
    return this.http.get<IPlanets>(this.swapiUrl + uri);
  }

  getCurrentFilm(uri: string): Observable<IFilms>{
    return this.http.get<IFilms>(this.swapiUrl + uri);
  }

  getCurrentSpecie(uri: string): Observable<ISpecies>{
    return this.http.get<ISpecies>(this.swapiUrl + uri);
  }

  getCurrentStarship(uri: string): Observable<IStarships>{
    return this.http.get<IStarships>(this.swapiUrl + uri);
  }

  getCurrentVehicle(uri: string): Observable<IVehicles>{
    return this.http.get<IVehicles>(this.swapiUrl + uri);
  }
}
