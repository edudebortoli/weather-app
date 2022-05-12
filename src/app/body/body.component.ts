import { City } from './../interfaces/city';
import { Component, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Output()
  cityData!: City;

  @Output()
  forecastData: any
}
