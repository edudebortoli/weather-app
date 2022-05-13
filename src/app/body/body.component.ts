import { City } from './../interfaces/city';
import { Component, Input, OnInit, Output } from '@angular/core';
import { FullWeather } from '../interfaces/full-weather';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {
  
  @Input()
  forecastData!: FullWeather
  
  @Input()
  cityData!: City

  constructor() { }

  ngOnInit(): void {
  }

}

