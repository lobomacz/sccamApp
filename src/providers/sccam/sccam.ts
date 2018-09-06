import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

/*
  Generated class for the SccamProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class SccamProvider {
private serverIp:string;

  constructor(public http: HttpClient,private storage:Storage) {
   let that=this;

    this.storage.get("serverIp").then((ip)=>{

      if(ip==null){
        that.serverIp="127.0.0.1";
      }
      else{
        that.serverIp=ip;
      }
    });
  }

GetServerIp():string{
  return this.serverIp;
}

GuardarServerIp(direccion:string){
this.storage.set("serverIp",direccion);
}

  ListaMedicos(){
    return this.http.get("http://localhost/api/medicos.php?opcion=1");
  }

  ListaPacientes(){
    return this.http.get("http://localhost/api/pacientes.php?opcion=1");
  }
  ListaCitas(){
    return this.http.get("http://localhost/api/citas.php?opcion=1");
  }

 ListaConsultas(){
    return this.http.get("http://localhost/api/consultas.php?opcion=1");
  }
  ListaEpicrisis(){
    return this.http.get("http://localhost/api/epicrisis.php?opcion=1");
  }

}
