import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import {filter, map, tap} from 'rxjs/operators';

import { WeatherReport } from '../weather-report';
import { WeatherAPIService } from '../weather-api.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {

	startDate = new Date(2000,0,1);
	endDate = new Date(2018,0,1);

	locations = [
		  	'UK',
		  	'England',
		  	'Scotland',
		  	'Wales'];
  	selectedLocation = this.locations[0];
	
	metrics = [
		  	'Tmax',
		  	'Tmin',
		  	'Rainfall'];
	selectedMetric = this.metrics[0];

	weatherData: WeatherReport[] = [];
	filteredWeatherData: WeatherReport[] = [];

 	constructor(private api: WeatherAPIService) { }

  	ngOnInit(): void {
	   	this.getWeatherDataAndFilter();
  	}

  	filterWeatherData(){
  		let date: Date = new Date();

  		this.filteredWeatherData = this.weatherData.filter(data => 
  		{
  			date.setFullYear(+data.year);
  			date.setMonth(data.month-1);
  			return ((date >= this.startDate && date <= this.endDate))
  		});
  	}

  	getWeatherDataAndFilter(){
  		let date: Date = new Date();

  		this.api.getWeatherData(this.selectedLocation, this.selectedMetric)
  			.pipe(
  				tap(data => this.weatherData = data),
  				map(results => results.filter(r => {
  					date.setFullYear(+r.year);
  					date.setMonth(r.month-1);
  					return ((date >= this.startDate && date <= this.endDate))})
  				)
  			)
  			.subscribe(filteredData => this.filteredWeatherData = filteredData);
  	}
}
