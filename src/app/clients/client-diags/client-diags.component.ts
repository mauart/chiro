import { Component, OnInit, OnDestroy } from '@angular/core';
import {ActivatedRoute,Params} from '@angular/router';
import {ClientsService} from '../clients.service';
import {AccordionModule} from "ng2-accordion";

@Component({
  selector: 'app-client-diags',
  templateUrl: './client-diags.component.html',
  styleUrls: ['./client-diags.component.css']
})
export class ClientDiagsComponent implements OnInit,OnDestroy {
  index:number;
  diagnosticos:any[];

  constructor(private route:ActivatedRoute,private clientsService:ClientsService) {
      this.route.params.subscribe((params:Params)=>{
          this.index=params['id'];
      });

  }
  ngOnDestroy(){
    this.clientsService.setEditable(false);
  }
  ngOnInit() {
    this.diagnosticos=this.clientsService.getDiagnosticos(this.index);
    this.clientsService.setEditable(true);
  }
}
