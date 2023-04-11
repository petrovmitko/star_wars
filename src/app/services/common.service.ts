import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ICharactersData } from '../models/characters.interfaces';
import { IFilmsData } from '../models/films.interfaces';

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
}
