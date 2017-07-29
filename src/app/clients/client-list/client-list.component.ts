import { Component, OnInit,ViewChild,OnDestroy,Input } from '@angular/core';
import {ClientShortModel} from '../client-short.model';
import {ClientsService} from '../clients.service';
import {Router,ActivatedRoute} from '@angular/router';
import {Subscription} from 'rxjs/Subscription';

@Component({
  selector: 'app-client-list',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.css']
})
export class ClientListComponent implements OnInit,OnDestroy {


  clients:ClientShortModel[];
  index:number;
  key:string;

  clientsSubscriptor:Subscription;

  constructor(private router:Router,private route:ActivatedRoute,private clientsService:ClientsService){

  }

  ngOnInit() {
    this.clientsSubscriptor=this.clientsService.clientsShortChange.subscribe((clients:ClientShortModel[])=>{
      this.clients=this.clientsService.getClients();
    });
    this.clients=this.clientsService.getClients();
    console.log("from client-list: ",this.clients);
  }
  ngOnDestroy(){
    console.log(this.index);
    this.clientsSubscriptor.unsubscribe();
  }
  onAddClient(){
    this.router.navigate(['/clients/new'],{relativeTo:this.route});
  }
  onDeleteClient(){
    this.clientsService.deleteClient(this.key).subscribe(result=>{
      this.clientsService.deleteClientFromArray(this.index);
      console.log(result);
    });
    this.clientsService.setEditable(false);
    this.router.navigate(['/clients']);
  }
  onSelected(info:{index,key})
  {
      this.index=info.index;
      this.key=info.key;
      console.log("info selected: ",info);
      this.clientsService.setEditable(true);
  }
}
