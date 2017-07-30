import {Component,Inject,ViewChild} from '@angular/core';
import {NgForm,FormGroup,FormControl} from '@angular/forms';

import {MdDialog, MdDialogRef} from '@angular/material';
import {MD_DIALOG_DATA} from '@angular/material';
import {FootDefModel} from '../footdef.model';

@Component({
  selector: 'foot-def',
  templateUrl: './foot-def.html',
  styleUrls: ['./client-add.component.css']
})
export class FootDef {
  footForm:FormGroup;
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

  constructor(
                private dialogRef: MdDialogRef<FootDef>,
                @Inject(MD_DIALOG_DATA) public data: any
              ) {
                console.log(data);
                this.initializeForm();

              }
  private initializeForm(){
    this.footForm=new FormGroup({
                                  'abd':new FormControl(this.data.abd || ''),
                                  'add':new FormControl(this.data.add || ''),
                                  'cavo':new FormControl(this.data.cavo || ''),
                                  'dismetria':new FormControl(this.data.dismetria || ''),
                                  'garra':new FormControl(this.data.garra || ''),
                                  'hallux':new FormControl(this.data.hallux || ''),
                                  'martillo':new FormControl(this.data.martillo || ''),
                                  'normal':new FormControl(this.data.normal || ''),
                                  'piequino':new FormControl(this.data.piequino || ''),
                                  'plano':new FormControl(this.data.plano || ''),
                                  'tipo_pieder':new FormControl(this.data.tipo_pieder || ''),
                                  'valgo':new FormControl(this.data.valgo || ''),
                                  'varo':new FormControl(this.data.varo || ''),
                                });
  }
  onSubmit(){
    console.log(this.footForm);
    // console.log(form.value);
    // let this.footForm.value=form.value;
    //
    let myFootDef=new FootDefModel(
                                    this.footForm.value.abd?true:false,this.footForm.value.add?true:false,this.footForm.value.cavo?true:false
                                    ,this.footForm.value.dismetria?true:false,this.footForm.value.garra?true:false,this.footForm.value.hallux?true:false,
                                    this.footForm.value.martillo?true:false,this.footForm.value.normal?true:false,this.footForm.value.piequino?true:false,
                                    this.footForm.value.plano?true:false,this.footForm.value.tipo_pieder,this.footForm.value.valgo?true:false,
                                    this.footForm.value.varo?true:false
                                  );
    console.log(myFootDef);
    this.dialogRef.close(myFootDef);

    //  setTimeout(()=>{
    //    this.dialogRef.close(form.value);
    //  },1000)
  }
  watcher(){
    console.log("hola");
  }
}
