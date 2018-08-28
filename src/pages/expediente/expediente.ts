import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AgregarPage } from '../agregar/agregar';

import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'page-expediente',
  templateUrl: 'expediente.html'
})
export class ExpedientePage {
  listado;
  listado1;
  constructor(public navCtrl: NavController, private http: HttpClient) {
    this.cargarInformacion();
     this.cargarInformacion1();
  }

  cargarInformacion() {
    this.http.get("http://localhost/api/pacientes.php?opcion=1").subscribe(snap => {
      console.log(snap);
      this.listado = snap;
    });
  }
   cargarInformacion1() {
    this.http.get("http://localhost/api/consulta.php?opcion=1").subscribe(snap => {
      console.log(snap);
      this.listado1 = snap;
    });
  }

   goRegistrar(){this.navCtrl.push(AgregarPage)}

}