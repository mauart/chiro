import { Component, OnInit,Inject,OnDestroy } from '@angular/core';
import {Router,ActivatedRoute,Params} from '@angular/router';
import {FootDefModel} from '../footdef.model';

@Component({
  selector: 'app-client-edit',
  templateUrl: './client-edit.component.html',
  styleUrls: ['./client-edit.component.css']
})
export class ClientEditComponent implements OnInit,OnDestroy {

  index:number;

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
            ];
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
    nextTabIndex:number=0;

    menuStatus={
      exp_fisica:false,
      exp_vascular:false,
      ant_heredo:false,
      ant_n_pato:false,
      ant_pato:false,
      ant_neuro:false,
      exm_bio:false
    };

    resultDialog1:FootDefModel;
    resultDialog2:FootDefModel;

  constructor(private router:Router,private route:ActivatedRoute) {
   }
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

  ngOnInit() {
    this.route.params.subscribe((param:Params)=>{
      this.index=+param['id'];
    });
  }
  ngOnDestroy(){

  }

}
