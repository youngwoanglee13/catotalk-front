import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class Guard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const token = localStorage.getItem('token'); // Obtén el token almacenado en localStorage

    if (token) {
      // Si hay un token, permite la navegación
      return true;
    } else {
      // Si no hay token, redirige al componente de inicio de sesión o a la página de acceso denegado
      this.router.navigate(['/signin']); // Reemplaza '/login' con la ruta correspondiente
      return false;
    }
  }
}