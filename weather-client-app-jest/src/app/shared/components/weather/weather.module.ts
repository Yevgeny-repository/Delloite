// NG
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

// APP
import { WeatherComponent } from '@shared/components/weather/weather.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
	declarations: [WeatherComponent],
	exports: [WeatherComponent],
	imports: [
        CommonModule,
        FormsModule,
		HttpClientModule,
		RouterModule ,
		FontAwesomeModule,
		ReactiveFormsModule

	],
})
export class WeatherModule {
}
