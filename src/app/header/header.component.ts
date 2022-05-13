import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import {
  debounceTime,
  distinctUntilChanged,
  filter,
  map,
  Observable,
  switchMap,
} from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import { LocationService } from 'src/app/services/location.service';
import { City } from '../interfaces/city';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
    
  form = new FormControl()
  results$!: Observable<any>
  cityData!: City


  @Output()
  cityFullfilled = new EventEmitter<any>();

  constructor(
    private location: LocationService,
    private toastr: ToastrService,
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
      .subscribe()
  }

  search(cityInput: string) {

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
          }
          this.cityFullfilled.emit(this.cityData)

          this.toastr.success(
            `${this.cityData.name}, ${this.cityData.country} Found!`
          );
          // success route ->
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

  // getUserLocation() {
  //   console.log(`fetching user location`)
  // }
}
