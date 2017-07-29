import { Component, OnInit,OnDestroy } from '@angular/core';
import {NgForm} from '@angular/forms';
import {Router,ActivatedRoute} from '@angular/router';
import {AuthService} from '../../services/auth';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  constructor(  private authService:AuthService,
                private router:Router,private route:ActivatedRoute) { }

  onSubmit(form:NgForm){
    const user={username:form.value.username,
                password:form.value.password,
                remember:form.value.remember}

    console.log(user);

    this.authService.signinUser(user.username,user.password);


  }

  ngOnInit() {
  }
  ngOnDestroy(){
  }

}
