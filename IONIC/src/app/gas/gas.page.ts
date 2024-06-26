import { Component, OnInit } from '@angular/core';
import { SensorService } from '../sensor.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-gas',
  templateUrl: './gas.page.html',
  styleUrls: ['./gas.page.scss'],
})
export class GasPage implements OnInit {
  gasData: any;
  airQuality: string = '';
  combinedIndex: number = 0;

  private subscription: Subscription | null = null;
  constructor(private sensorService: SensorService) {}

  ngOnInit() {
    this.fetchGasValue();
    this.fetchAirQuality();
  }
  fetchGasValue() {
    this.sensorService.getGasValue().subscribe(
      (data) => {
        this.gasData = data;
        console.log(this.gasData);
      },
      (error) => {
        console.error('Error fetching gas value:', error);
      }
    );
  }
  fetchAirQuality() {
    this.sensorService.getAirQuality().subscribe(
      (data) => {
        this.airQuality = data.quality;
        this.combinedIndex = data.combined_index;
      },
      (error) => {
        console.error('Error fetching gas value:', error);
      }
    );
  }
  refreshData() {
    this.fetchGasValue();
    this.fetchAirQuality();
  }
}
