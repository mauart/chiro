import { Component, OnInit,Inject } from '@angular/core';
import {ClientsService} from '../clients.service';
import {NgForm} from '@angular/forms';
import {MD_DIALOG_DATA} from '@angular/material';
import {ClientFullModel} from '../client-full.model';
import {MdDialog, MdDialogRef} from '@angular/material';

@Component({
  selector: 'app-client-exams',
  templateUrl: './client-exams.component.html',
  styleUrls: ['./client-exams.component.css']
})
export class ClientExamsComponent implements OnInit {
  avance1: string = '';
  avance1Name:string='';
  fileAvance1:File;

  avance2: string = '';
  avance2Name:string='';
  fileAvance2:File;

  carta:string="";
  cartaName:string="";
  fileCarta:File;

  estudios:string[]=[];
  estudiosName:string='';
  fileEstudios:File[]=[];

  id:number;

  client:ClientFullModel;

  constructor(private clientsService:ClientsService,@Inject(MD_DIALOG_DATA) public data: any,public dialogRef: MdDialogRef<ClientExamsComponent>) {
    this.id=data;
    this.client=clientsService.getClient(this.id);
    console.log(this.id);
    console.log(data);
  }

  ngOnInit() {
  }
  onImageEstudio(e){
    this.estudios=[];
    console.log(e);
    console.log(e.dataTransfer);
    console.log("-")
    console.log(e.target.files);

    this.fileEstudios=e.dataTransfer ? e.dataTransfer.files: e.target.files;

    for(let file of this.fileEstudios){
      let pattern = /image-*/;
      let reader = new FileReader();

      if (!file.type.match(pattern)) {
          alert('invalid format');
          return;
      }
      reader.onload = this._handleReaderLoadedPush.bind(this);
      reader.readAsDataURL(file);
      this.estudiosName+=file.name+' ';
    }
    console.log(this.estudios);
  }
  _handleReaderLoadedPush(e) {
    var reader = e.target;
    this.estudios.push(reader.result);
}
  onImageAvance1(e) {
        this.fileAvance1 = e.dataTransfer ? e.dataTransfer.files[0] : e.target.files[0];

        let pattern = /image-*/;
        let reader = new FileReader();

        if (!this.fileAvance1.type.match(pattern)) {
            alert('invalid format');
            return;
        }


        reader.onload = this._handleReaderLoaded.bind(this);
        reader.readAsDataURL(this.fileAvance1);
        this.avance1Name=this.fileAvance1.name;
    }
    _handleReaderLoaded(e) {
      var reader = e.target;
      this.avance1 = reader.result;
  }
  onImageAvance2(e) {
        this.fileAvance2 = e.dataTransfer ? e.dataTransfer.files[0] : e.target.files[0];

        let pattern = /image-*/;
        let reader = new FileReader();

        if (!this.fileAvance2.type.match(pattern)) {
            return;
        }


        reader.onload = this._handleReaderLoaded2.bind(this);
        reader.readAsDataURL(this.fileAvance2);
        this.avance2Name=this.fileAvance2.name;
    }
    _handleReaderLoaded2(e) {
      var reader = e.target;
      this.avance2 = reader.result;
  }

  onImageCarta(e) {
        this.fileCarta = e.dataTransfer ? e.dataTransfer.files[0] : e.target.files[0];

        let pattern = /image-*/;
        let reader = new FileReader();

        if (!this.fileCarta.type.match(pattern)) {
            return;
        }


        reader.onload = this._handleReaderLoaded3.bind(this);
        reader.readAsDataURL(this.fileCarta);
        this.cartaName=this.fileCarta.name;
    }
    _handleReaderLoaded3(e) {
      var reader = e.target;
      this.carta= reader.result;
  }
  onSubmit(form:NgForm){

    let promiseFile1:Promise<{file,url}>=new Promise<{file,url}>((resolve,reject)=>{
      if(this.fileAvance1){
        this.clientsService.uploadImage(this.fileAvance1).then(snapshot=>{
          let url1=snapshot.downloadURL;
          resolve({file:'file1',url:url1});
        })
        .catch(error=>{
          console.log(error);
          reject(error);
        });
      }
    });

    let promiseFile2:Promise<{file,url}>=new Promise<{file,url}>((resolve,reject)=>{
      if(this.fileAvance2){
        this.clientsService.uploadImage(this.fileAvance2).then(snapshot=>{
          let url2=snapshot.downloadURL;
          resolve({file:'file2',url:url2});
        })
        .catch(error=>{
          console.log(error);
          reject(error);
        });
      }
    });

    let promiseFile3:Promise<{file,url}>=new Promise<{file,url}>((resolve,reject)=>{
      if(this.fileCarta){
        this.clientsService.uploadImage(this.fileCarta).then(snapshot=>{
          let url3=snapshot.downloadURL;
          resolve({file:'file3',url:url3});
        })
        .catch(error=>{
          console.log(error);
        });
      }
    })
    let promiseFiles1:Promise<{file,url}>=new Promise<{file,url}>((resolve,reject)=>{
      let urls=[];
      if(this.fileEstudios.length>0){
        for(let file of this.fileEstudios ){
          this.clientsService.uploadImage(file).then(snapshot=>{
            urls.push(snapshot.downloadURL);
          })
          .catch(error=>{
            console.log(error);
          });
        }
        resolve({file:'file4',url:urls});
      }
    });

    Promise.all([promiseFile1,promiseFile2,promiseFile3,promiseFiles1])
    .then((success)=>{
      console.log(success);
      let diagnostico={
                         presuntivo:form.value.presuntivo,
                         definitivo:form.value.definitivo,
                         plan_estudio:form.value.plan_de_estudio,
                         urlAvance1:'',
                         urlAvance2:'',
                         urlCarta:'',
                         urlEstudios:[]
                       }
      success.map((objToFile)=>{
        if(objToFile.file==='file1')
          diagnostico.urlAvance1=objToFile.url;
        else if(objToFile.file==='file2')
          diagnostico.urlAvance2=objToFile.url;
        else if(objToFile.file==='file3')
          diagnostico.urlCarta=objToFile.url;
        else if(objToFile.file==='file4')
          diagnostico.urlEstudios=objToFile.url;
      });

      this.client.addDiagnostico(diagnostico);

      let key=this.clientsService.getClientKey(this.id);

      this.clientsService.updateClientDB(key,this.client)
      .subscribe(result=>{
        console.log(result);
        setTimeout(()=>{  this.dialogRef.close();},1000);
      },error=>{
        console.log(error);
      })
    });
  }
}
