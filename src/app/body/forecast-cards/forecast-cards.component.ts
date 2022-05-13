import { Component, Input, OnInit } from '@angular/core';
import { DailyWeather } from 'src/app/interfaces/daily-weather';

@Component({
  selector: 'app-forecast-cards',
  templateUrl: './forecast-cards.component.html',
  styleUrls: ['./forecast-cards.component.css']
})
export class ForecastCardsComponent implements OnInit {

  @Input()
  daily!: DailyWeather[]

  constructor() { }

  ngOnInit(): void {
  }

}
