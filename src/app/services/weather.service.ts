import { City } from './../interfaces/city';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../environments/environment.prod';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  API = environment.apiForecastUrl
  UNITS = 'metric'
  constructor(private httpClient: HttpClient) { }

  getForecast(cityData: City) {
    return this.httpClient.get(
      `${this.API}&lat=${cityData.lat}&lon=${cityData.lon}&units=${this.UNITS}`
    );
  }
}
