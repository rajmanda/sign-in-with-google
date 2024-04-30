import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';


export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router)

  if (sessionStorage.getItem('loggedInUser')) {
    return true;
  } else {
    // Redirect to login
    console.log('user not logged in');
    router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
    return false;
  }
};
