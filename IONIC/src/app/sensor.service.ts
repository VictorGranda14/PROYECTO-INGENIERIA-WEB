import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SensorService {
  private baseUrl = 'http://localhost:5000'; // URL del servidor Flask

  constructor(private http: HttpClient) {}

  getTemperatureValue(): Observable<any> {
    return this.http.get(`${this.baseUrl}/temperature`);
  }

  getGasValue(): Observable<any> {
    return this.http.get(`${this.baseUrl}/gas`);
  }
  getAirQuality(): Observable<any> {
    return this.http.get(`${this.baseUrl}/air_quality`);
  }
}
