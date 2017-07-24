import {FootDefModel} from  './footdef.model';
import {ClientShortModel} from './client-short.model';
export class ClientFullModel{
  //minimum values
  private name:string;
  private email:string;
  private age:number;
  private sex:string;
  private estate:string;
  private phone:string;
  private cellphone:string;
  private address:string;
  private spin:string;
  private proffesion:string;
  private height:number;
  private weight:number;
  private calz:string;
  private pressure:string;
  private fc:string;
  private fr:string;

  //onicopatias
  private onicopatias=[];
  private piel=[];
  private fisica_otros:string;

  //vasculares
  private vasculares=[];
  private vascular_otros:string;

  //heredofam
  private heredofams=[];

  //ant.No patologico
  private habitat:string;
  private alimentacion:string;
  private habitos=[]
  private nopat_otros:string;

  //ant. patologicos
  private enfermedades_inf=[];
  private ant_patolo:string;
  private ant_motivo:string;

  //Exp.Neurologica
  private reflexDer=[];

  private reflexIzq=[]

  //Exm.Biomedico
  private  nivelaciones=[];
  private tipoDer:string;
  private tipoIzq:string;
  private derotrapat:string;
  private izqotrapat:string;

  private valoracion:string;
  private impresion:string;
  private ortesis:string;

  private def_pie_der:FootDefModel;
  private def_pie_izq:FootDefModel;

  private diagnosticos=[];
  constructor(name:string,email:string,age:number,sex:string,estate:string,
              phone:string,cellphone:string,address:string,spin:string,proffesion:string,
              height:number,weight:number,calz:string,pressure:string,fc:string,
              fr:string){

                this.name=name;
                this.email=email;
                this.age=age;
                this.sex=sex;
                this.estate=estate;
                this.phone=phone;
                this.cellphone=cellphone;
                this.address=address;
                this.spin=spin;
                this.proffesion=proffesion;
                this.height=height;
                this.weight=weight;
                this.calz=calz;
                this.pressure=pressure;
                this.fc=fc;
                this.fr=fr;
            }
  addOnicopatia(onicopatia:boolean){
      this.onicopatias.push(onicopatia);
  }
  addOnicopatiaArray(onicopatias:any){
    this.onicopatias=onicopatias;
  }
  getOnicopatias()
  {
    return this.onicopatias;
  }
  addPiel(enfPiel:boolean){
    this.piel.push(enfPiel);
  }
  addPielArray(piel:any){
    this.piel=piel;
  }
  getPiel(){
    return this.piel;
  }
  setFisicaOtros(otros:string){
    this.fisica_otros=otros;
  }
  addVasculares(vascular:boolean){
    this.vasculares.push(vascular);
  }
  addVascularesArray(vasculares:any){
    this.vasculares=vasculares;
  }
  setVascularOtros(otros:string){
    this.vascular_otros=otros;
  }

  addHeredoFamiliar(heredofam:boolean){
    this.heredofams.push(heredofam);
  }
  addHeredoFamiliarArray(heredofams:any){
    this.heredofams=heredofams;
  }
  setHabitat(habitat:string){
    this.habitat=habitat;
  }
  setAlimentacion(alimentacion:string){
    this.alimentacion=alimentacion;
  }
  addHabito(habito:string){
    if(habito)
      this.habitos.push(habito);
  }
  addHabitoArray(habitos:any){
    this.habitos=habitos;
  }
  setNoPatOtros(nopat_otros:string){
    this.nopat_otros=nopat_otros;
  }
  addEnfermedadInf(enfermedad:string){
    this.enfermedades_inf.push(enfermedad);
  }
  addEnfermedadInfArray(enfermedades:any){
    this.enfermedades_inf=enfermedades;
  }
  setAntPatologico(antecedente:string){
    this.ant_patolo=antecedente;
  }
  setAntMotivo(motivo:string){
    this.ant_motivo=motivo;
  }
  setReflexDer(reflex:{}){
    this.reflexDer.push(reflex);
  }
  setReflexDerArray(reflexDer:any){
    this.reflexDer=reflexDer;
  }
  setReflexIzq(reflex:{}){
    this.reflexIzq.push(reflex);
  }
  setReflexIzqArray(reflexIzq){
    this.reflexIzq=reflexIzq;
  }
  addNivelaciones(nivelacion:{}){
    this.nivelaciones.push(nivelacion);
  }
  addNivelacionesArray(nivelaciones:any){
    this.nivelaciones=nivelaciones;
  }
  setTipoDer(tipo:string){
    this.tipoDer=tipo;
  }
  setTipoIzq(tipo:string){
    this.tipoIzq=tipo;
  }
  setDerOtraPat(pat:string){
    this.derotrapat=pat;
  }
  setIzqOtraPat(pat:string){
    this.izqotrapat=pat;
  }
  setValoracion(valoracion:string){
    this.valoracion=valoracion;
  }
  setImpresion(impresion:string){
    this.impresion=impresion;
  }
  setOrtesis(ortesis:string){
    this.ortesis=ortesis;
  }
  setDefPieDer(def_pie_der:FootDefModel){
    this.def_pie_der=def_pie_der;
  }
  setDefPieIzq(def_pie_izq:FootDefModel){
    this.def_pie_izq=def_pie_izq;
  }
  getClientShortModel(){
    return new ClientShortModel(this.name,this.age,this.cellphone,this.proffesion,this.height,this.weight);
  }
  addDiagnostico(diagnostico:{definitivo,plan_estudio,presuntivo,urlAvance1,urlAvance2,urlCarta,urlEstudios}){
    this.diagnosticos.push(diagnostico);
  }
  addDiagnosticoArray(diagnosticos:any){
    this.diagnosticos=diagnosticos;
  }
  getDiagnosticos(){
    return this.diagnosticos;
  }
}
