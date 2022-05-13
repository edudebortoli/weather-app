import { Component } from '@angular/core';
import { City } from './interfaces/city';
import { FullWeather } from './interfaces/full-weather';
import { WeatherService } from './services/weather.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'weather-app';

  readonly FORECASTDAYS = 5
  // O Máximo são 7 dias
  
  cityData!: City  
  forecastData!: FullWeather

  constructor(
    private weather: WeatherService
  ) {}
  getWeather($event: City){
    this.cityData = $event
    this.weatherSearch($event.lat, $event.lon)
  }

  private weatherSearch(lat: number, lon: number) {
    this.weather.getForecast(lat,lon).subscribe({
      next: (forecast: any) => {
        this.forecastData = {
          current: {
            date: new Date(forecast.current.dt * 1000),
            icon: this.weather.getIcon(forecast.current.weather[0].icon),
            description: forecast.current.weather[0].description,
            main: forecast.current.weather[0].main,
            temp: Math.round(forecast.current.temp),
            max: Math.round(forecast.daily[0].temp.max),
            min: Math.round(forecast.daily[0].temp.min)
          },
          daily: [],
        }
        
        for(let i = 1; i < (this.FORECASTDAYS + 1); i++) {
          let dailyData = {
            date: new Date(forecast.daily[i].dt *1000),
            icon: this.weather.getIcon(forecast.daily[i].weather[0].icon),
            min: Math.round(forecast.daily[i].temp.min),
            max: Math.round(forecast.daily[i].temp.max)
          }
          this.forecastData.daily.push(dailyData)
        }

        return;
      },
    });
  }
}
