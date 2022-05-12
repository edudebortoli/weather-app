import { environment } from '../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class LocationService {
  RESULTS = 1; //Determines how many cities the API will search
  API = environment.apiCityUrl;

  cityData = {};

  constructor(private httpClient: HttpClient) {}

  search(cityInput: string) {
    return this.httpClient.get(
      `${this.API}&q=${cityInput}&limit=${this.RESULTS}`
    );
  }
}
