import {Component} from '@angular/core';
import {NgForm} from '@angular/forms';

import {MdDialog, MdDialogRef} from '@angular/material';

import {FootDefModel} from '../footdef.model';

@Component({
  selector: 'foot-def',
  templateUrl: './foot-def.html',
  styleUrls: ['./client-add.component.css']
})
export class FootDef {

  antepies=[
              {name:'ADD',ref:'add'},
              {name:'ABD',ref:'abd'},
              {name:'Dismetria',ref:'dismetria'},
              {name:'Hallux',ref:'hallux'},
              {name:'Garra',ref:'garra'},
              {name:'D.Martillo',ref:'martillo'}
            ];

  mediopies=[
              {name:'Normal',ref:'normal'},
              {name:'Plano',ref:'plano'},
              {name:'Cavo',ref:'cavo'}
            ];
  retropies=[
              {name:'Valgo',ref:'valgo'},
              {name:'Varo',ref:'varo'},
              {name:'Equino',ref:'piequino'}
            ];
  tipopies= [
            {name:'Griego',ref:'griego'},
            {name:'Egipcio',ref:'egipcio'},
            {name:'Cuadrado',ref:'cuadrado'}
          ];

  constructor(public dialogRef: MdDialogRef<FootDef>) {}
  onSubmit(form:NgForm){
    console.log(form.value);
    let formValue=form.value;
    let myFootDef=new FootDefModel(
                                    formValue.abd?true:false,formValue.add?true:false,formValue.cavo?true:false
                                    ,formValue.dismetria?true:false,formValue.garra?true:false,formValue.hallux?true:false,
                                    formValue.martillo?true:false,formValue.normal?true:false,formValue.piequino?true:false,
                                    formValue.plano?true:false,formValue.tipo_pieder,formValue.valgo?true:false,
                                    formValue.varo?true:false
                                  );
    this.dialogRef.close(myFootDef);
    //  setTimeout(()=>{
    //    this.dialogRef.close(form.value);
    //  },1000)
  }
  watcher(){
    console.log("hola");
  }
}
