import { TestBed } from '@angular/core/testing';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';

import { WeatherAPIService } from './weather-api.service';

describe('WeatherAPIService', () => {
	let httpTestingController: HttpTestingController;
  	let service: WeatherAPIService;

	beforeEach(() => {
	  TestBed.configureTestingModule({
	  	providers: [WeatherAPIService],
	  	imports: [HttpClientTestingModule]
	  });
	  httpTestingController = TestBed.get(HttpTestingController);
	  service = TestBed.inject(WeatherAPIService);
	});

	afterEach(() => {
    		httpTestingController.verify();
  	});

	it('should be created', () => {
	  expect(service).toBeTruthy();
	});
});
