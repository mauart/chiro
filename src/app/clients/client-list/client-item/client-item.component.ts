import {Component,
        OnInit,
        Input,
        OnDestroy,
        Output,
        EventEmitter
        } from '@angular/core';
import {ClientShortModel} from '../../client-short.model';
import {MdListModule,MdIconModule,MdMenuModule,MdIconRegistry,MdMenuTrigger} from '@angular/material';

@Component({
  selector: 'app-client-item',
  templateUrl: './client-item.component.html',
  styleUrls: ['./client-item.component.css']
})
export class ClientItemComponent implements OnInit,OnDestroy {

  @Input()
  client:ClientShortModel;
  @Input()
  index:number

  @Output()
  itemSelected:EventEmitter<{}>=new EventEmitter<{}>();


  onSelected(){
      this.itemSelected.emit({index:this.index,key:this.client.getKey()});
  }

  constructor(){
              }

  ngOnInit() {
  }
  ngOnDestroy(){

  }

}
