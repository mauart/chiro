import { Component, OnInit } from '@angular/core';
import {ActivatedRoute,Params} from '@angular/router';
import {ClientsService} from '../clients.service';
import {AccordionModule} from "ng2-accordion";

@Component({
  selector: 'app-client-diags',
  templateUrl: './client-diags.component.html',
  styleUrls: ['./client-diags.component.css']
})
export class ClientDiagsComponent implements OnInit {
  index:number;
  diagnosticos:any[];

  constructor(private route:ActivatedRoute,private clientsService:ClientsService) {
      this.route.params.subscribe((params:Params)=>{
          this.index=params['id'];
      });

  }
  ngOnInit() {
    this.diagnosticos=this.clientsService.getDiagnosticos(this.index);
  }
}
