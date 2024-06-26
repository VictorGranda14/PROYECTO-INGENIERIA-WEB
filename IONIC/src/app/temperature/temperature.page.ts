import { Component, OnInit, OnDestroy } from '@angular/core';
import { SensorService } from '../sensor.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-temperature',
  templateUrl: './temperature.page.html',
  styleUrls: ['./temperature.page.scss'],
})
export class TemperaturePage implements OnInit, OnDestroy {
  temperatureData: { current: number; min: number; max: number } = {
    current: 0,
    min: 100,
    max: 0,
  };
  private updateInterval: any;
  private subscription: Subscription | null = null;

  constructor(private sensorService: SensorService) {}

  ngOnInit() {
    this.fetchTemperature();
    this.startAutoUpdate();
  }

  ngOnDestroy() {
    this.stopAutoUpdate();
  }

  fetchTemperature() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
    this.subscription = this.sensorService.getTemperatureValue().subscribe(
      (data) => {
        this.temperatureData = data;
        console.log(this.temperatureData);
      },
      (error) => {
        console.error('Error fetching temperature:', error);
      }
    );
  }

  startAutoUpdate() {
    this.updateInterval = setInterval(() => {
      this.fetchTemperature();
    }, 2000); // Actualiza cada 2 segundos
  }

  stopAutoUpdate() {
    if (this.updateInterval) {
      clearInterval(this.updateInterval);
    }
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
