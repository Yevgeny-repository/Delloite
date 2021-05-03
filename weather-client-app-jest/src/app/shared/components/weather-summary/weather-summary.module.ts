// NG
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

// APP
import { WeatherSummaryComponent } from './weather-summary.component';

@NgModule({
	declarations: [WeatherSummaryComponent],
	exports: [WeatherSummaryComponent],
	imports: [
        CommonModule,
        FormsModule,
		HttpClientModule,
		RouterModule ,
		ReactiveFormsModule
	],
})
export class WeatherSummaryModule {
}
