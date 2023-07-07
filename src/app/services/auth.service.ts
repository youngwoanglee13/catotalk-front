import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  url = localStorage.getItem('urlback');
  constructor(private http:HttpClient) { }

  signUp(user:any) {
    return this.http.post<any>(this.url+'/auth/signup', user);
  }

  signIn(user:any) {
    return this.http.post<any>(this.url+'/auth/signin', user);
  }
  
  isLogged(): boolean {
    return !!localStorage.getItem('token');
  }
  logout(): void {
    localStorage.removeItem('token');
    localStorage.removeItem('username');
    localStorage.removeItem('image');
    localStorage.removeItem('id');
  }
  getUserName(): string {
    return localStorage.getItem('username') ?? ''; // Devuelve una cadena vacía si el valor es null
  }
  getUserImage(): string {
    return localStorage.getItem('image') ?? ''; 
  }
}
