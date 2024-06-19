import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  constructor(
    private http: HttpClient,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit() {
    const botonJ = document.getElementById('BotonJ');
    if (botonJ) {
      botonJ.addEventListener('click', (event) => {
        event.preventDefault();
        this.cargarDatos();
      });
    } else {
      console.error('Elemento con id "BotonJ" no encontrado.');
    }
  }

  cargarDatos() {
    this.http.get('assets/sensores.Json').subscribe(
      (data: any) => {
        this.mostrarDatos(data);
      },
      (error) => {
        console.error('Error cargando el archivo JSON:', error);
      }
    );
  }

  mostrarDatos(datos: any) {
    const sensorDataDiv = document.getElementById('sensor-data');
    if (sensorDataDiv) {
      sensorDataDiv.innerHTML = ''; // Clear previous data
      for (const sensor in datos.sensores) {
        const detalles = datos.sensores[sensor];
        const sensorElement = document.createElement('div');
        sensorElement.className = 'sensor';
        sensorElement.textContent = `${
          sensor.charAt(0).toUpperCase() + sensor.slice(1)
        }: ${detalles.valor} ${detalles.unidad}`;
        sensorDataDiv.appendChild(sensorElement);
      }
    } else {
      console.error('Elemento con id "sensor-data" no encontrado.');
    }
  }
  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
