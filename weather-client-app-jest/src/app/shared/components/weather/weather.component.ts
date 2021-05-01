// NG
import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';

// VENDOR
import { SubSink } from 'subsink';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

// APP
import { CityModel, RequestModel, WeatherResponseModel } from '@shared/models';
import { WeatherService } from '@shared/services/weather-shared.service';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent implements OnInit, OnDestroy {

  @Input() cities: CityModel[] = [];

  /**
   * Event emitter to emit when plus button is clicked
   */
  @Output()
  public onWeatherCalculated = new EventEmitter<WeatherResponseModel>();

  public iconBaseUrl = "https://openweathermap.org/img/wn/";

  weatherForm: FormGroup;
  weatherControls = {
    city: new FormControl(''),
    units: new FormControl('', {
      validators: Validators.required
    }),
    weatherInfo: new FormControl(''),
    weatherImg: new FormControl(''),
  };
  plusIcon = faPlus;
  submitted = false;

  private subs = new SubSink();

  /**
   * Constuctor 
   * Here WeatherService injected
   * @param weatherService 
   */
  constructor(private weatherService: WeatherService, private fb: FormBuilder) { }

  ngOnInit() {

    this.weatherForm = new FormGroup({
      weather_items: this.fb.array([this.getWeatherControlsGroup()])
    })
  }

  get weatherItems() {
    return this.weatherForm.get('weather_items') as FormArray;
  }


  /**
   * OnOestroy Hook
   * Here we unsubscribe
   */
  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }

  weatherSub(response: WeatherResponseModel, weatherIndex: number) {
    let icon: string = response.weather[0].icon;
    let weatherIcon = this.iconBaseUrl + icon + ".png";
    let temp = Math.floor(response.main.temp);
    this.weatherItems.controls[weatherIndex].get('weatherInfo').setValue(temp);
    this.weatherItems.controls[weatherIndex].get('weatherImg').setValue(weatherIcon);

    this.weatherItems.push(this.getWeatherControlsGroup());
    this.submitted = false;
    this.onWeatherCalculated.emit(response);
  }

  private getWeatherControlsGroup() {
    return this.fb.group({
      city: new FormControl(''),
      units: new FormControl('', {
        validators: Validators.required
      }),
      weatherInfo: new FormControl(''),
      weatherImg: new FormControl(''),
    });
  }

  submit(weatherIndex: number) {
    this.submitted = true;
    if (this.weatherForm.invalid) {
      return;
    }
    let row = this.weatherItems.controls[weatherIndex];
    let city = row.get('city').value.name;
    let units = row.get('units').value;
    let model: RequestModel = new RequestModel(city, units);
    this.subs.sink = this.weatherService.getWeather(model)
      .subscribe(data => this.weatherSub(data, weatherIndex));
  }
}
