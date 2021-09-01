import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable()
export class WeatherFinderService {

    constructor(private http: HttpClient) {}

    getCityWeather(name: string) {
        return this.http.get('https://jsonmock.hackerrank.com/api/weather?name='+name);
    }
}