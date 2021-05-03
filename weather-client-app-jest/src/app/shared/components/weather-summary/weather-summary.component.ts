import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-weather-summary',
  templateUrl: './weather-summary.component.html',
  styleUrls: ['./weather-summary.component.scss']
})
export class WeatherSummaryComponent implements OnInit {

  @Input() weatherSummary: string[] = [];
  constructor() { }

  ngOnInit() {
  }

}
