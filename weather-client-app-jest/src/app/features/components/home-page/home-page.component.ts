// NG
import { Component, OnInit } from '@angular/core';

// VENDOR
import { Observable, Subject } from 'rxjs';

// APP
import { CityModel, WeatherResponseModel } from '@shared/models';

/**
 * Home page component
 */
@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  cities: CityModel[] = [];
  weatherSummary: string[] = [];

  /**
   * Constuctor 
   */
  constructor() { }

  /**
   * OnInit Hook
   */
  ngOnInit() {
    this.cities = this.buildCities();
  }

  getWeather(response: WeatherResponseModel): void {
    let temp = Math.floor(response.main.temp);
    let city = response.name;
    let info = response.weather[0].description;

    let weather = `${city} ${temp}; ${info}`;
    this.weatherSummary.push(weather);
  }

   /**
   * build demo array for cities model
   */
  private buildCities(): CityModel[] {
    return [
      new CityModel(1, '', '', '', 'Kyiv', ''),
      new CityModel(1, '', '', '', 'Tel Aviv', ''),
    ]
  }
}
