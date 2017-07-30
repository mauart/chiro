import {NgModule} from '@angular/core';
import {Routes,RouterModule} from '@angular/router';

import {SigninComponent} from './auth/signin/signin.component';
import {SignupComponent} from './auth/signup/signup.component';

import {ClientListComponent} from './clients/client-list/client-list.component';
import {UserListComponent} from './users/user-list/user-list.component';
import {ClientDetailComponent} from './clients/client-detail/client-detail.component';
import {ClientAddComponent} from './clients/client-add/client-add.component';
import {ClientsComponent} from './clients/clients.component';
import {ClientDiagsComponent} from './clients/client-diags/client-diags.component';
import {ClientEditComponent} from './clients/client-edit/client-edit.component';

import {AuthGuard} from './services/auth.guard';


const appRoutes:Routes=[
                  {path:'', redirectTo:'/clients',pathMatch:'full',canActivate:[AuthGuard]},
                  {path:'clients/new',component:ClientAddComponent,canActivate:[AuthGuard]},
                  {path:'clients/edit/:id',component:ClientEditComponent,canActivate:[AuthGuard]},
                  {path:'clients',component:ClientsComponent,canActivate:[AuthGuard],children:[
                  {path:':id',component:ClientDetailComponent},
                  {path:':id/diags',component:ClientDiagsComponent}
                  ]},
                  {path:'users',component:UserListComponent,canActivate:[AuthGuard]},
                  {path:'signin',component:SigninComponent},
                  {path:'signup',component:SignupComponent}

                ]
@NgModule({
  imports:[RouterModule.forRoot(appRoutes)],
  exports:[RouterModule]
})
export class AppRoutingModule{}
