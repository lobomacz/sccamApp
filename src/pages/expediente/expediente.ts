import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { HttpClient } from "@angular/common/http";
import { SccamProvider } from "../../providers/sccam/sccam";


/**
 * Generated class for the ExpedientePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-expediente',
  templateUrl: 'expediente.html',
})
export class ExpedientePage {
 listado;
  constructor(public navCtrl: NavController, public navParams: NavParams, private provider:SccamProvider) {
  	 this.cargarInformacion();
  	  this.cargarInformacion1();
  }
  cargarInformacion() {
    this.provider.ListaPacientes().subscribe(snap => {
      console.log(snap);
      this.listado = snap;
    });
  }
   cargarInformacion1() {
    this.provider.ListaConsultas().subscribe(snap => {
      console.log(snap);
      this.listado = snap;
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ExpedientePage');
  }

}
