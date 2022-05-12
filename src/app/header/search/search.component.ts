import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import {
  debounceTime,
  distinctUntilChanged,
  filter,
  map,
  Observable,
  switchMap,
  tap,
} from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import { City } from './../../interfaces/city';
import { LocationService } from 'src/app/services/location.service';
import { WeatherService } from './../../services/weather.service';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit {
  form = new FormControl();
  results$!: Observable<any>;

  cityData!: City;
  forecastData: any;

  constructor(
    private location: LocationService,
    private weather: WeatherService,
    private toastr: ToastrService
  ) {}

  ngOnInit() {
    this.form.valueChanges
      .pipe(
        map((value) => value.trim()),
        filter((value) => value.length > 1),
        debounceTime(400),
        distinctUntilChanged(),
        switchMap(async (value) => this.search(value))
      )
      .subscribe();
  }

  search(cityInput: string) {
    console.log(`searching for: ${cityInput}`);

    this.location.search(cityInput).subscribe({
      next: (data: any) => {
        if (this.fullObject(data)) {
          data[0] as City;
          this.cityData = {
            country: data[0].country,
            state: data[0].state,
            name: data[0].name,
            lat: data[0].lat,
            lon: data[0].lon,
          };
          this.toastr.success(
            `${this.cityData.name}, ${this.cityData.country} Found!`
          );
          this.weatherSearch(this.cityData);
          //success route ->
        } else {
          this.toastr.error(
            `Try using cityname, country or state. \n
          Ex: Madrid,ES`,
            `${cityInput} not found`
          );
        }
      },
    });
  }

  private fullObject(object: Object): boolean {
    const objString = JSON.stringify(object);
    if (objString === '[]') {
      return false;
    } else {
      return true;
    }
  }

  private weatherSearch(cityData: City) {
    console.table(cityData);

    this.weather.getForecast(cityData).subscribe({
      next: (forecast: any) => {
        console.log(forecast);
        this.forecastData = {
          date: new Date(forecast.current.dt * 1000),
          icon: forecast.current.weather[0].icon,
          description: forecast.current.weather[0].description,
          main: forecast.current.weather[0].main,
          temp: forecast.current.temp,
          max: forecast.daily[0].temp.max,
          min: forecast.daily[0].temp.min
        }
        console.table(this.forecastData)

        return;
      },
    });
  }

  // getUserLocation() {
  //   console.log(`fetching user location`)
  // }
}
