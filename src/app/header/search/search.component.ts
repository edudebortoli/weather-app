import { City } from './../../interfaces/city';
import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { LocationService } from 'src/app/services/location.service';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit {
  form!: FormGroup;
  cityInput = '';
  cityData: City = {
    country: '',
    state: '',
    name: '',
    lat: 0,
    lon: 0,
  };

  constructor(
    private location: LocationService,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {}

  async search() {
    console.log(`searching for: ${this.cityInput}`);

    this.location.search(this.cityInput).subscribe({
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
          )
          this.weatherSearch(this.cityData);

          //success route ->

        } else {
          this.toastr.error(
            `Try using cityname, country or state. \n
          Ex: Madrid,ES`,
            `${this.cityInput} not found`
          );
        }
      },
    });
    console.log('fim');
  }

  private fullObject(object: Object): boolean {
    const objString = JSON.stringify(object);

    if (objString === '[]') {
      console.log(`cidade não encontrada`);
      return false;
    } else {
      console.log(`cidade encontrada`);
      return true;
    }
  }

  weatherSearch(cityData: City) {

  }
}