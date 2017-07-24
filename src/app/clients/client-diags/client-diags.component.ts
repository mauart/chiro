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

  avance1Url:string[]=[];
  avance2Url:string[]=[];
  cartaUrl:string[]=[];
  estudios:string[][]=[];

  constructor(private route:ActivatedRoute,private clientsService:ClientsService) {
      this.route.params.subscribe((params:Params)=>{
          this.index=params['id'];
      });
  }

  ngOnInit() {
    this.diagnosticos=this.clientsService.getDiagnosticos(this.index);
    this.defineUrl();
    console.log("avance1",this.avance1Url);
    console.log("avance2",this.avance2Url);
    console.log("cartas",this.cartaUrl);
  }
  private defineUrl(){
    this.diagnosticos.map((diagnostico)=>{
      this.getImageUrlAvance1(diagnostico.urlAvance1);
      this.getImageUrlAvance2(diagnostico.urlAvance2);
      this.getImageUrlCarta(diagnostico.urlCarta);
      // this.getImageUrlEstudios(diagnostico.urlEstudios);
    })
  }

  private getImageUrlAvance1(imageName){
    this.clientsService.getImageUrl(imageName)
    .then((url)=>{
      this.avance1Url.push(url);
    })
    .catch(error=>{
      this.avance1Url.push(null);
      console.log(error);
    });
  }
  private getImageUrlAvance2(imageName){
    this.clientsService.getImageUrl(imageName)
    .then((url)=>{
      this.avance2Url.push(url);
    })
    .catch(error=>{
      this.avance2Url.push(null);
      console.log(error);
    });
  }
  private getImageUrlCarta(imageName){
    this.clientsService.getImageUrl(imageName)
    .then((url)=>{
      this.cartaUrl.push(url);
    })
    .catch(error=>{
      this.cartaUrl.push(null);
      console.log(error);
    });
  }
  // private getImageUrlEstudios(imageArray){
  //     let images:string[]=[];
  //     for(let image of imageArray){
  //       this.clientsService.getImageUrl(image)
  //       .then((url)=>{
  //         images.push(url);
  //       })
  //       .catch(error=>{
  //         console.log(error);
  //       })
  //     }
  //     this.estudios.push(images);
  //     console.log(this.estudios);
  // }

}
