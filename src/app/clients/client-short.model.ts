export class ClientShortModel{
  private name:string;
  private edad:number;
  private telefono:string;
  private profesion:string;
  private estatura:number;
  private peso:number;

  private key:string;
  constructor(name:string,edad:number,telefono:string,
              profesion:string,estatura:number,peso:number){
    this.name=name;
    this.edad=edad;
    this.telefono=telefono;
    this.profesion=profesion;
    this.estatura=estatura;
    this.peso=peso;

  }
  getKey(){
    return this.key;
  }
  setKey(key:string){
    this.key=key;
  }
}
