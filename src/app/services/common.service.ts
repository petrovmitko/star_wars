import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  private readonly swapiUrl = 'https://swapi.dev/api/';

  constructor(private http: HttpClient) { }

  getPeople(uri: string) {
    return this.http.get(this.swapiUrl + uri);
  }
}
