import { Component, OnInit,OnDestroy } from '@angular/core';
import {ClientFullModel} from '../client-full.model';
import {ClientsService} from '../clients.service';
import {MdDialog, MdDialogRef} from '@angular/material';

import {Router,ActivatedRoute,Params} from '@angular/router';

import {ClientExamsComponent} from '../client-exams/client-exams.component';

@Component({
  selector: 'app-client-detail',
  templateUrl: './client-detail.component.html',
  styleUrls: ['./client-detail.component.css']
})
export class ClientDetailComponent implements OnInit,OnDestroy {
  client:ClientFullModel;
  id:number;
  constructor(public dialog: MdDialog,private clientsService:ClientsService,private router:Router,private route:ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe((params:Params)=>{
        this.id=+params['id'];
        this.client=this.clientsService.getClient(this.id);
    })

  }
  openDialogExamen() {
   let dialogRef = this.dialog.open(ClientExamsComponent,{
        data:this.id
      });

   dialogRef.afterClosed().subscribe(result => {
     let resultDialog1 = result;
     console.log("form value:",resultDialog1);
   });
 }

  onSearchForDiags(){
    this.router.navigate([`/clients/${this.id}/diags`],{relativeTo:this.route});
  }
  ngOnDestroy(){
    this.clientsService.setEditable(false);
  }

}
