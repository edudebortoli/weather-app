import { Weather } from './../../interfaces/weather';
import { City } from './../../interfaces/city';
import { Component, OnInit } from '@angular/core';
import { Day } from 'src/app/enum/day';

@Component({
  selector: 'app-main-card',
  templateUrl: './main-card.component.html',
  styleUrls: ['./main-card.component.css']
})
export class MainCardComponent implements OnInit {

  city!: City
  weather!: Weather
  day = 'asd'

  constructor() { }

  ngOnInit(): void {
  }

}
