import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { HttpClient } from "@angular/common/http";

/**
 * Generated class for the AgendaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-agenda',
  templateUrl: 'agenda.html',
})
export class AgendaPage {
listado;
constructor(public navCtrl: NavController, private http: HttpClient) {
    this.cargarInformacion();
    
  } 
 cargarInformacion() {
    this.http.get("http://localhost/api/citas.php?opcion=1").subscribe(snap => {
      console.log(snap);
      this.listado = snap;
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AgendaPage');
  }

}
