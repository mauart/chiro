import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {ClientsService} from '../clients/clients.service';
import {Router} from '@angular/router';

import {AuthService} from '../services/auth';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  token:string;
  constructor(
                private authService:AuthService,
                private router:Router,
                private clientsService:ClientsService) { }

  onSubmit(form:NgForm)
  {
    const search=form.value.search;
    console.log(search);
  }
  ngOnInit() {
  }
  onLogout(){
    this.authService.token=null;
    this.router.navigate(['/signin'])
  }
  onSelected(){


  }

}
