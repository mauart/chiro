import { Component, OnInit, } from '@angular/core';
import {NgForm} from '@angular/forms';
import {AuthService} from '../../services/auth';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  isPasswordValid:boolean;

  constructor(private authService:AuthService) { }

  ngOnInit() {
  }
  onSubmit(form:NgForm){
    let email=form.value.email;
    let password=form.value.password;



    this.authService.signupUser(email,password);

    console.log(email,password);

  }

}
