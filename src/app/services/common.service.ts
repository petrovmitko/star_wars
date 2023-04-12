import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ICharactersData } from '../models/characters.interfaces';
import { IFilmsData } from '../models/films.interfaces';
import { IPlanetsData } from '../models/planets.interfaces';
import { ISpeciesData } from '../models/species.interfaces';

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
}
