import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ICharactersData } from '../models/characters.interfaces';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  private readonly swapiUrl = 'https://swapi.dev/api/';

  constructor(private http: HttpClient) { }

  getPeople(uri: string): Observable<ICharactersData>{
    return this.http.get<ICharactersData>(this.swapiUrl + uri);
  }
}
