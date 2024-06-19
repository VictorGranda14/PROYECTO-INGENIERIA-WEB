import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  register(
    username: string,
    rut: string,
    email: string,
    region: string,
    comuna: string,
    password: string
  ): Observable<any> {
    return this.http.post(`${this.apiUrl}/register`, {
      username,
      rut,
      email,
      region,
      comuna,
      password,
    });
  }

  login(username: string, password: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/login`, { username, password });
  }
  isAuthenticated(): boolean {
    const token = localStorage.getItem('token');
    return !!token;
  }

  logout(): void {
    localStorage.removeItem('token');
  }
}
