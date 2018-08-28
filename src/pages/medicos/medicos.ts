import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { HttpClient } from "@angular/common/http";

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
 constructor(public navCtrl: NavController, private http: HttpClient) {
    this.cargarInformacion();
    
  }

cargarInformacion() {
    this.http.get("http://localhost/api/medicos.php?opcion=1").subscribe(snap => {
      console.log(snap);
      this.listado = snap;
    });
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad MedicosPage');
  }

}
