import { Component, OnInit,ViewChild } from '@angular/core';
import {MdInputModule} from '@angular/material';
import {NgForm} from '@angular/forms'
import {ClientFullModel} from '../client-full.model';

import {MdDialog, MdDialogRef} from '@angular/material';
import {FootDef} from './foot-def.component';
import {Confirm} from './confirm.component';

import {FootDefModel} from '../footdef.model';

import {ClientsService} from '../clients.service';
import {Response} from '@angular/http';

import {Router} from '@angular/router';

@Component({
  selector: 'app-client-add',
  templateUrl: './client-add.component.html',
  styleUrls: ['./client-add.component.css']
})
export class ClientAddComponent implements OnInit {

  hombroniv:boolean;
  caderaniv:boolean;
  rotinterna:boolean;
  rotexterna:boolean;
  flexion:boolean;
  extension:boolean;

  hombroniv2:boolean;
  caderaniv2:boolean;
  rotinterna2:boolean;
  rotexterna2:boolean;
  flexion2:boolean;
  extension2:boolean

  nivelaciones=[
    'hombroniv','caderaniv','rotinterna','rotexterna','flexion','extension'
  ]
  nivelaciones2=[
    'hombroniv2','caderaniv2','rotinterna2','rotexterna2','flexion2','extension2'
  ]

  tipos=[{ref:'normal',name:'Normal'},{ref:'valgo',name:'Valgo'},{ref:'varo',name:'Varo'},{ref:'recurvatum',name:'Recurvatum'}];

  antepies=[{ref:'add',name:'ADD'},{ref:'abd',name:'ABD'},{ref:'dismetria',name:'Dismetria'},{ref:'hallux',name:'Hallux'},
          {ref:'garra',name:'Garra'},{ref:'dmartillo',name:'D.Martillo'}
        ];
  mediopies=[
            {ref:'mednormal',name:'Normal'},
            {ref:'medplano',name:'Plano'},
            {ref:'medcavo',name:'Clavo'}
            ];
  retropies=[
            {ref:'retrovalgo',name:'Valgo'},
            {ref:'retrovaro',name:'Varo'},
            {ref:'retroequino',name:'Equino'}
            ];
  tipoDePie=[{ref:'tipgriego',name:'Griego'},{ref:'tipegipcio',name:'Egipcio'},{ref:'tipcuadrado',name:'Cuadrado'}];

  genders = [
    'Masculino',
    'Femenino'
  ];

  states=[
    'Soltero(a)',
    'Divorciado(a)',
    'Casado(a)',
    'Viudo(a)'
  ];

  onicopatias=[
    'Onicomicosis',
    'Onicocriptosis',
    'Onicogrifosis'
  ];

  piel=[
    'Tiñas',
    'Hiperqueratosis',
    'Helomas',
    'VPH',
    'Lunares'
  ];

  vasculares=[
                {ref:'capilar',name:'Llenado capilar'},
                {ref:'color',name:'Cam.Color'},
                {ref:'odema',name:'Odema'},
                {ref:'temp',name:'Temp'},
                {ref:'varices',name:'Varices'},
                {ref:'pulsosp',name:'Pulsos P'},
                {ref:'ta',name:'T.A'},
                {ref:'tp',name:'T.P'},
                {ref:'perfiles',name:'Prueba de perfiles'},
                {ref:'itb',name:'ITB'}
              ];
  heredofams=[
                {ref:'alergia',name:'Alergias'},
                {ref:'piecavo',name:'Pie cavo'},
                {ref:'cardiopatia',name:'Cardiopatias'},
                {ref:'diabetes',name:'Diabetes Mellitus'},
                {ref:'hallux',name:'Hallux valgus'},
                {ref:'hipoglucemia',name:'Hipoglucemia'},
                {ref:'hemolia',name:'Hemolia'},
                {ref:'pieplano',name:'Pie plano'},
                {ref:'jsastre',name:'Juanete Sastre'},
                {ref:'artritis',name:'Artritis'},
                {ref:'hipertension',name:'Hipertension'},
                {ref:'inmuno',name:'Inmunodeficiencia'},
                {ref:'gota',name:'Gota'},
                {ref:'anemia',name:'Anemia'},
              ];

    habitats=[
                'Urbano',
                'Rural'
              ];
    alimentacion=[
                'Buena',
                'Regular',
                'Mala'
                ];
    habitos=[
                'Suficientes',
                'Deficientes'
            ];
    habitos2=[
                {ref:'tabaquismo',name:'Tabaquismo'},
                {ref:'alcoholismo',name:'Alcoholismo'},
                {ref:'toxicomania',name:'Toxicomanias'}
              ]
    q_enf_infant=['Si','No'];

    enf_infant=[
                {ref:'inf_gast',name:'Gastritis'},
                {ref:'inf_renal',name:'Daño renal'},
                {ref:'inf_tb',name:'TB'},
                {ref:'inf_ca',name:'C/A'},
                {ref:'inf_diabetes',name:'Diabetes'},
                {ref:'inf_cardio',name:'Cardiovasculares'},
                {ref:'inf_pulmonar',name:'Pulmonar'},
                {ref:'inf_quirurgico',name:'Quirurgicos'},
                {ref:'inf_trauma',name:'Traumaticos'},
                {ref:'inf_alergico',name:'Alergicos'},
                {ref:'inf_vih',name:'VIH'},
                {ref:'inf_varices',name:'Varices'},
                {ref:'inf_hepatitis',name:'Hepatitis'}
              ];
      per_presente=[
                      {ref:'presente1',name:'Presente'},
                      {ref:'presente2',name:'Presente'},
                      {ref:'presente3',name:'Presente'},
                      {ref:'presente4',name:'Presente'}
                    ];
      percepciones = [
                {ref: 'presente', name: 'Presente'},
                {ref: 'ausente', name: 'Ausente'},
                {ref: 'disminuida', name: 'Disminuida'}
               ];
      comboValuesReflex=['pd_dolorosa',
                          'pd_tactil',
                          'pd_termica',
                          'pd_vibratoria',
                          'rd_rotuliano',
                          'rd_aquiliano'
                        ];
      comboValuesReflex2=['pi_dolorosa',
                          'pi_tactil',
                          'pi_termica',
                          'pi_vibratoria',
                          'ri_rotuliano',
                          'ri_aquiliano'
                          ];

  hombro_der=[{ref:'hombroniv',name:'Nivelado '},{ref:'hombrodesniv',name:'Desnivelado '}];

  impresiones=[
                  {ref:'podografia',name:'Podografia'},
                  {ref:'foam',name:'Foam'},
                  {ref:'yeso',name:'Toma de yeso'}
              ];

  tipoOrtesis=[
                {ref:'correctora',name:'Correctora'},
                {ref:'profilactica',name:'Profilactica'},
                {ref:'paliativa',name:'Paliativa'},
                {ref:'calzado',name:'Reco. De calzado'}
              ];


  menuStatus={
    exp_fisica:false,
    exp_vascular:false,
    ant_heredo:false,
    ant_n_pato:false,
    ant_pato:false,
    ant_neuro:false,
    exm_bio:false
  }
  nextTabIndex:number=0;

  resultDialog1:FootDefModel;
  resultDialog2:FootDefModel;

  nextMenu(index){
    switch(index){
        case 1:this.menuStatus.exp_fisica=true;break;
        case 2:this.menuStatus.exp_vascular=true;break;
        case 3:this.menuStatus.ant_heredo=true;break;
        case 4:this.menuStatus.ant_n_pato=true;break;
        case 5:this.menuStatus.ant_pato=true;break;
        case 6:this.menuStatus.ant_neuro=true;break;
        case 7:this.menuStatus.exm_bio=true;break;
    }

    this.nextTabIndex=index;

  }
  onSubmit(form:NgForm){
    console.log(form);
    const client:ClientFullModel=new ClientFullModel( form.value.name,form.value.email,form.value.age,
                                                      form.value.sex,form.value.estate,form.value.phone,
                                                      form.value.cellphone,form.value.address,form.value.spin,
                                                      form.value.proffesion,form.value.height,form.value.weight,
                                                      form.value.calz,form.value.pressure,form.value.fc,form.value.fr);

    //fisica
    client.addOnicopatia(form.value.onicomicosis?true:false);
    client.addOnicopatia(form.value.onicocriptosis?true:false);
    client.addOnicopatia(form.value.onicogrifosis?true:false);

    client.addPiel(form.value.tiñas?true:false);
    client.addPiel(form.value.hiperqueratosis?true:false);
    client.addPiel(form.value.helomas?true:false);
    client.addPiel(form.value.vph?true:false);
    client.addPiel(form.value.lunares?true:false);
    client.setFisicaOtros(form.value.fisica_otros);

    //vasculares
    client.addVasculares(form.value.capilar?true:false);
    client.addVasculares(form.value.color?true:false);
    client.addVasculares(form.value.odema?true:false);
    client.addVasculares(form.value.temp?true:false);
    client.addVasculares(form.value.varices?true:false);
    client.addVasculares(form.value.pulsosp?true:false);
    client.addVasculares(form.value.ta?true:false);
    client.addVasculares(form.value.tp?true:false);
    client.addVasculares(form.value.perfiles?true:false);
    client.addVasculares(form.value.itb?true:false);
    client.setVascularOtros(form.value.vascular_otros);

    //heredofams
    client.addHeredoFamiliar(form.value.alergia?true:false);
    client.addHeredoFamiliar(form.value.piecavo?true:false);
    client.addHeredoFamiliar(form.value.cardiopatia?true:false);
    client.addHeredoFamiliar(form.value.diabetes?true:false);
    client.addHeredoFamiliar(form.value.hallux?true:false);
    client.addHeredoFamiliar(form.value.hipoglucemia?true:false);
    client.addHeredoFamiliar(form.value.hemolia?true:false);
    client.addHeredoFamiliar(form.value.pieplano?true:false);
    client.addHeredoFamiliar(form.value.jsastre?true:false);
    client.addHeredoFamiliar(form.value.artritis?true:false);

    client.addHeredoFamiliar(form.value.hipertension?true:false);
    client.addHeredoFamiliar(form.value.inmuno?true:false);
    client.addHeredoFamiliar(form.value.gota?true:false);
    client.addHeredoFamiliar(form.value.anemia?true:false);

    //Ant.No Patalogicos
    client.setHabitat(form.value.habitat);
    client.setAlimentacion(form.value.alimentacion);
    client.addHabito(form.value.habitos);
    client.addHabito(form.value.tabaquismo?'tabaquismo':null);
    client.addHabito(form.value.alcoholismo?'alcoholismo':null);
    client.addHabito(form.value.toxicomania?'toxicomania':null);
    client.setNoPatOtros(form.value.no_pat_otros);

    //Ant.Patolo
    this.enf_infant.map((enfermedad)=>{
      if(form.value[enfermedad.ref])
        client.addEnfermedadInf(enfermedad.ref);
    });

    client.setAntPatologico(form.value.ant_pato);
    client.setAntMotivo(form.value.motivo_consulta);

    //ExpNeurologica
    this.comboValuesReflex.map((ref)=>{
        if(form.value[ref]){
          client.setReflexDer({ref:ref,value:form.value[ref]});
        }
    });

    this.comboValuesReflex2.map((ref)=>{
        if(form.value[ref]){
          client.setReflexIzq({ref:ref,value:form.value[ref]});
        }
    });


    //Exp Biomecanica
    this.nivelaciones.map((nivelacion)=>{
      client.addNivelaciones({ref:nivelacion,value:form.value[nivelacion]});
    });

    this.nivelaciones2.map((nivelacion)=>{
      client.addNivelaciones({ref:nivelacion,value:form.value[nivelacion]});
    });

      client.setTipoDer(form.value.tipoDer);
      client.setTipoIzq(form.value.tipoIzq);

      client.setDerOtraPat(form.value.derotrapat);
      client.setIzqOtraPat(form.value.izqotrapat);

      client.setValoracion(form.value.valoracion);

      client.setImpresion(form.value.impresion);
      client.setOrtesis(form.value.ortesis);

      client.setDefPieDer(this.resultDialog1);
      client.setDefPieIzq(this.resultDialog2);


    console.log(client);
    let dialogRef=this.dialog.open(Confirm);
    setTimeout(()=>{
      dialogRef.close();
    },4000);


    this.clientService.addClient(client).subscribe(data=>{
      console.log(data.json());
      this.clientService.updateClientKey(data.json().name)
    },error=>{
      console.log("error",error);
    })

    this.clientService.addClientToArray(client);

    form.reset();


  }
  constructor(private router:Router,private clientService:ClientsService,public dialog: MdDialog) { }

  openDialogDer() {
   let dialogRef = this.dialog.open(FootDef,{data:this.resultDialog1 || {} });

   dialogRef.afterClosed().subscribe(result => {
     if(result)
      this.resultDialog1 = result;
   });
 }

 openDialogIzq() {
  let dialogRef = this.dialog.open(FootDef,{data:this.resultDialog2 || {} });

  dialogRef.afterClosed().subscribe(result => {
    if(result)
      this.resultDialog2 = result;
  });
}
  ngOnInit() {
  }

}
