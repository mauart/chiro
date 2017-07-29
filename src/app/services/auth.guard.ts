import {Injectable} from '@angular/core';
import {CanActivate,ActivatedRouteSnapshot,RouterStateSnapshot,Router} from '@angular/router';
import {AuthService} from './auth';

@Injectable()
export class AuthGuard implements CanActivate{
  constructor(private authService:AuthService,private router:Router){}
  canActivate(route:ActivatedRouteSnapshot,
              state:RouterStateSnapshot){
        if(!this.authService.isAuthenticated()){
          this.router.navigate(['/signin']);
        }
       return this.authService.isAuthenticated();
  }
}
