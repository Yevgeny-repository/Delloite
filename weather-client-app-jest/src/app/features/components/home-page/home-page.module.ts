// NG
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

// APP
import { HomePageComponent } from './home-page.component';
import { WeatherModule, WeatherSummaryModule } from '@shared/components/';

@NgModule({
	declarations: [HomePageComponent],
	exports: [HomePageComponent],
	imports: [
        CommonModule,
        FormsModule,
		HttpClientModule,
		RouterModule,
		WeatherModule,
		WeatherSummaryModule
	],
})
export class HomePageModule {
}
