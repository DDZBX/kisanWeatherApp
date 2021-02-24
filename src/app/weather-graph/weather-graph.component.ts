import { Component, OnInit, OnChanges, SimpleChanges, Input } from '@angular/core';
import { WeatherReport } from '../weather-report';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Label } from 'ng2-charts';

@Component({
  selector: 'app-weather-graph',
  templateUrl: './weather-graph.component.html',
  styleUrls: ['./weather-graph.component.css']
})
export class WeatherGraphComponent implements OnInit {

	@Input() data: WeatherReport[];
	@Input() location: string;
	@Input() metric: string;

	barChartLabels:Label[] = [];
	barChartData: ChartDataSets[] = [];
	barChartOptions: ChartOptions = {
    	responsive: true,
  	};
  	barChartType: ChartType = 'bar';
  	barChartLegend = false;
  	barChartPlugins = [];
  	barChartColor = ['rgba(102, 255, 102, 1)'];

  	lineChartColors:Array<any> = [{ 
      backgroundColor: 'rgb(154, 229, 154)',
      hoverBackgroundColor: 'rgb(47, 182, 47)',
    }];

  	constructor() { }

  	ngOnInit(): void {
  	}

  	ngOnChanges(changes: SimpleChanges){
  		this.barChartLabels = this.data.map(data => data.month.toString() + "/" + data.year.toString());
  		this.barChartData = [{ 
  			data: this.data.map(data => data.value),
    		label: this.metric + " in " + this.location
    	}];
  		; 
  	}
}
