import { Component } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  constructor(){
    firebase.initializeApp({
      apiKey: "AIzaSyCuJZEAZYaORDmJmug_GvZ0hFHHy3I2w_8",
      storageBucket: "chiropodist-aea5b.appspot.com",
      authDomain: "chiropodist-aea5b.firebaseapp.com"
    })
  }
}
