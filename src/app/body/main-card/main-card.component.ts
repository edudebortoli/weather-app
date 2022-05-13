import { City } from './../../interfaces/city';
import { Component, Input, OnInit } from '@angular/core';
import { CurrentWeather } from '../../interfaces/current-weather'

@Component({
  selector: 'app-main-card',
  templateUrl: './main-card.component.html',
  styleUrls: ['./main-card.component.css']
})
export class MainCardComponent implements OnInit {

  @Input()
  city!: City
  @Input()
  weather!: CurrentWeather
  
  day = 'asd'

  constructor() { }

  ngOnInit(): void {
  }

}
