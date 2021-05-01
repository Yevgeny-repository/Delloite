import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CityModel, WeatherResponseModel } from '@shared/models';

import { HomePageComponent } from './home-page.component';

describe('HomePageComponent', () => {
  let component: HomePageComponent;
  let fixture: ComponentFixture<HomePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  
	describe('methods section', () => {
		beforeEach(() => {
			component = new HomePageComponent();
		});

		describe('check default values', () => {
			it('check for cities', () => {
				expect(component.cities).toEqual([]);
			});

			it('check for weatherSummary', () => {
				expect(component.weatherSummary).toEqual([]);
			});
    });
    
    describe('check ngOnInit', () => {
      beforeEach(() => {
        component.ngOnInit();
      });
			it('check for cities', () => {
				expect(component.cities).toEqual([
          new CityModel(1, '', '', '', 'Kyiv', ''),
          new CityModel(1, '', '', '', 'Tel Aviv', ''),
        ]);
			});
    });
    describe('check getWeather', () => {
      beforeEach(() => {
        let input: WeatherResponseModel = {
          name: 'tashkent',
          main: {
            temp: 2,
            feels_like: 1,
            humidity: 4,
            pressure: 5,
            temp_max: 100,
            temp_min: -100
          },
          weather: [
            {
              description: '3',
              icon: '1',
              id: 1,
              main: '{}'
            }
          ]
          
        } as any;
        component.getWeather(input);
      });
			it('check for cities', () => {
				expect(component.weatherSummary).toEqual([
          'tashkent 2; 3'
        ]);
			});
    });
	});
});


