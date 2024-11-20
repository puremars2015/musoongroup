import { CanActivateFn } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
 
  return true;
  
  const token = localStorage.getItem('token');

  if (token == null) {
    alert('請先登入');
    window.location.href = '/login';
  }

  return token != null;
};
