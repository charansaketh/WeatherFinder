import {Component, OnInit} from '@angular/core';
import {WeatherFinderService} from './weatherFinder.service';

interface CityWeather {
  name: string;
  weather: string;
  status: string[];
}

interface ApiResponse {
  page: number;
  per_page: number;
  total: number;
  total_pages: number;
  data: CityWeather[];
}

@Component({
  selector: 'weather-finder',
  templateUrl: './weatherFinder.component.html',
  styleUrls: ['./weatherFinder.component.scss']
})
export class WeatherFinder implements OnInit {
  searchVal = '';
  showDiv = false;
  showNoData = false;
  data: CityWeather;

  constructor(private service: WeatherFinderService) {}
  ngOnInit(): void {
  }

  search() {
    this.service.getCityWeather(this.searchVal)
    .subscribe((response: ApiResponse) => {
      if(response['data'].length > 0) {
        this.data = response['data'][0];
        this.showNoData = false;
        this.showDiv = true;
      } else {
        this.showDiv = false;
        this.showNoData = true;
      }
    });
  }
}
