import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {AccordionModule} from "ng2-accordion";

import { AppComponent } from './app.component';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MdListModule,MdIconModule,MdMenuModule} from '@angular/material';
import {MdInputModule} from '@angular/material';

import {AuthGuard} from './services/auth.guard';


import { SigninComponent } from './auth/signin/signin.component';
import {AppRoutingModule} from './app-routing.module';
import { ClientListComponent } from './clients/client-list/client-list.component';
import { HeaderComponent } from './header/header.component';
import { UserListComponent } from './users/user-list/user-list.component';
import {MaterialModule, MdNativeDateModule} from '@angular/material';

import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';

import 'hammerjs';
import { ClientItemComponent } from './clients/client-list/client-item/client-item.component';
import { ClientDetailComponent } from './clients/client-detail/client-detail.component';
import {ClientsService} from './clients/clients.service';
import { ClientsComponent } from './clients/clients.component';
import { ClientAddComponent } from './clients/client-add/client-add.component';

import { FootDef } from './clients/client-add/foot-def.component';
import {Confirm} from './clients/client-add/confirm.component';
import { SignupComponent } from './auth/signup/signup.component';

import {AuthService} from './services/auth';
import { ClientDiagsComponent } from './clients/client-diags/client-diags.component';
import { ClientExamsComponent } from './clients/client-exams/client-exams.component';

@NgModule({
  declarations: [
    AppComponent,
    SigninComponent,
    ClientListComponent,
    HeaderComponent,
    UserListComponent,
    ClientItemComponent,
    ClientDetailComponent,
    ClientsComponent,
    ClientAddComponent,
    FootDef,
    Confirm,
    SignupComponent,
    ClientDiagsComponent,
    ClientExamsComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AccordionModule,
    AppRoutingModule,
    //Material Design Components
    BrowserAnimationsModule,
    MdListModule,
    MdIconModule,
    MaterialModule,
    MdNativeDateModule,
    MdInputModule

  ],
  providers: [ClientsService,AuthGuard,AuthService],
  entryComponents: [ FootDef,Confirm,ClientExamsComponent ],

  bootstrap: [AppComponent]
})
export class AppModule { }
