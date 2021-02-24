import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherComponent } from './weather.component';
import { WeatherAPIService } from '../weather-api.service';

describe('WeatherComponent', () => {
  let component: WeatherComponent;
  let fixture: ComponentFixture<WeatherComponent>;
  let weatherAPIStub: Partial<WeatherAPIService>;

  beforeEach(() => {
    TestBed.configureTestingModule({
        declarations: [ WeatherComponent ],
        providers: [ { provide: WeatherAPIService} ],
    })

    fixture = TestBed.createComponent(WeatherComponent);
    component = fixture.componentInstance;
    weatherAPIStub = TestBed.inject(WeatherAPIService);

  });

});
