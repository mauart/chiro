import { Component, OnInit,Inject } from '@angular/core';
import {Router,ActivatedRoute,Params} from '@angular/router';

@Component({
  selector: 'app-client-edit',
  templateUrl: './client-edit.component.html',
  styleUrls: ['./client-edit.component.css']
})
export class ClientEditComponent implements OnInit {

  index:number;
  constructor(
              private router:Router,
              private route:ActivatedRoute,
              ) {

   }

  ngOnInit() {
    this.route.params.subscribe((param:Params)=>{
      this.index=+param['id'];
    });
  }

}
