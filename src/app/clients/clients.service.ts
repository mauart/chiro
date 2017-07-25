import {ClientShortModel} from './client-short.model';
import {ClientFullModel} from './client-full.model';

import {Injectable,OnInit} from '@angular/core';

import {Subject} from 'rxjs/Subject';

import * as firebase from 'firebase';

import {Headers,Http,Response} from '@angular/http';
import 'rxjs';
@Injectable()
export class ClientsService implements OnInit{

  //clientsFullChange=new Subject<ClientFullModel[]>()
  clientsShortChange=new Subject<ClientShortModel[]>();
  ngOnInit(){

  }
  constructor(private http:Http){
    this.onGet();
  }

  clients:ClientShortModel[]=[];

    clientsFull:ClientFullModel[]=[];
    editable:boolean=false;

    isEditable()
    {
      return this.editable;
    }
    setEditable(editable:boolean){
      this.editable=editable;
    }
    updateClient(index:number,client:ClientFullModel){
      this.clientsFull[index]=client;
      this.clients[index]=this.clientsFull[index].getClientShortModel();
    }
    updateClientDB(key:string,client:ClientFullModel){
      console.log('https://chiropodist-aea5b.firebaseio.com/chirodb/'+key+'.json');
      console.log(client);
      return this.http.put('https://chiropodist-aea5b.firebaseio.com/chirodb/'+key+'.json',client);
    }
    getClients(){
      console.log("clients:",this.clients)
      return this.clients.slice();
    }
    getClientKey(index:number){
      return this.clients[index].getKey();
    }
    getClient(index:number){
      return this.clientsFull[index];
    }

    addClient(client:ClientFullModel){
      return this.http.post('https://chiropodist-aea5b.firebaseio.com/chirodb.json',client);
    }
    updateClientKey(key:string){
      let client:ClientShortModel=this.clients[this.clients.length-1];
      client.setKey(key);
      this.clients[this.clients.length-1]=client;
      this.clientsShortChange.next(this.clients.slice());
    }
    addClientToArray(clientFull:ClientFullModel){
        this.clients.push(clientFull.getClientShortModel());
        this.clientsFull.push(clientFull);

        //this.clientsFullChange.next(this.clientsFull.slice());
        this.clientsShortChange.next(this.clients.slice());
    }


    deleteClient(key:string){
      console.log('https://chiropodist-aea5b.firebaseio.com/chirodb/'+key+'.json');

      return this.http.delete('https://chiropodist-aea5b.firebaseio.com/chirodb/'+key+'.json');
    }

    deleteClientFromArray(index:number)
    {
      this.clients.splice(index,1);
      this.clientsFull.splice(index,1);

      //this.clientsFullChange.next(this.clientsFull.slice());
      this.clientsShortChange.next(this.clients.slice());
    }
    getImageUrl(imageName:string){
      let storageRef=firebase.storage().ref();
      return storageRef.child('/images/'+imageName).getDownloadURL();
    }
    getClientsFull(){
      return this.http.get('https://chiropodist-aea5b.firebaseio.com/chirodb.json')
      .map((response:Response)=>{
        const data=response.json();
        return data;
      })
    }
    getDiagnosticos(index:number){
      return this.clientsFull[index].getDiagnosticos().slice();
    }
    onGet(){
      this.getClientsFull()
      .subscribe((clients:any)=>{
        const data=clients;
        for(let key in data){

          let client=data[key];
          console.log(client.estate);
          let clientFull:ClientFullModel=new ClientFullModel(client.name,client.email,client.age,client.sex,client.estate,
                                                            client.phone,client.cellphone,client.address,client.spin,client.proffesion,
                                                              client.height,client.weight,client.calz,client.pressure,client.fc,
                                                              client.fr);

          clientFull.addOnicopatiaArray(client.onicopatias);
          clientFull.addPielArray(client.piel);
          clientFull.setFisicaOtros(client.fisica_otros);

          clientFull.addVascularesArray(client.vasculares);
          clientFull.setVascularOtros(client.vascular_otros);

          clientFull.addHeredoFamiliarArray(client.heredofams);
          clientFull.setHabitat(client.habitat);
          clientFull.setAlimentacion(client.alimentacion);

          clientFull.addHabitoArray(client.habitos);

          clientFull.setNoPatOtros(client.nopat_otros);
          clientFull.addEnfermedadInfArray(client.enfermedades_inf);

          clientFull.setAntPatologico(client.ant_patolo);

          clientFull.setAntMotivo(client.ant_motivo);
          clientFull.setReflexDerArray(client.reflexDer);

          clientFull.setReflexIzqArray(client.reflexIzq);
          clientFull.addNivelacionesArray(client.nivelaciones);
          clientFull.setTipoDer(client.tipoDer);
          clientFull.setTipoIzq(client.tipoIzq);
          clientFull.setDerOtraPat(client.derotrapat);
          clientFull.setIzqOtraPat(client.izqotrapat);
          clientFull.setValoracion(client.valoracion);
          clientFull.setImpresion(client.impresion);
          clientFull.setOrtesis(client.ortesis);
          clientFull.setDefPieDer(client.def_pie_der);
          clientFull.setDefPieIzq(client.def_pie_izq);

          clientFull.addDiagnosticoArray(client.diagnosticos);


          let shortClient=clientFull.getClientShortModel();
          shortClient.setKey(key);
          console.log("shortVersion: ",shortClient);
          this.clients.push(shortClient);
          this.clientsFull.push(clientFull);
        }
      },error=>{
        console.log("error during get",error);
      });
      console.log("ClientsFull",this.clientsFull);
      console.log("ClientsShort",this.clients);
    }
    uploadImage(file:File){
      console.log(file);
      let metadata={'contentType': file.type};
      let auth=firebase.auth();
      let storageRef=firebase.storage().ref();
      return storageRef.child('images/'+file.name).put(file,metadata);
    }
}
