import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { HttpClient } from "@angular/common/http";
import { SccamProvider } from "../../providers/sccam/sccam";

/**
 * Generated class for the MedicosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-medicos',
  templateUrl: 'medicos.html',
})
export class MedicosPage {
 listado;
 constructor(public navCtrl: NavController, private http: HttpClient, private provider:SccamProvider) {
    this.cargarInformacion();
    
  }

cargarInformacion() {
    this.provider.ListaMedicos().subscribe(snap => {
      console.log(snap);
      this.listado = snap;
    });
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad MedicosPage');
  }

}
