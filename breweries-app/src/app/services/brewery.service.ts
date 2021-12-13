import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { BreweryHttp } from '../models/http-models/brewery-http.interface';

@Injectable({
  providedIn: 'root'
})
export class BreweryService {
  breweriesUrl = `${environment.apiUrl}`
  perPage = 10;

  constructor(private _http: HttpClient) { }

  getBreweries(page: number): Observable<BreweryHttp> {
    return this._http.get<BreweryHttp>(`${this.breweriesUrl}?per_page=${this.perPage}&page=${page}`);
  }

  getBrewery(id: string): Observable<any> {
    return this._http.get<BreweryHttp>(`${this.breweriesUrl}/${id}`);
  }

  getBreweriesByName(name: string): Observable<BreweryHttp> {
    return this._http.get<BreweryHttp>(`${this.breweriesUrl}/autocomplete?query=${name}`);
  }
}


