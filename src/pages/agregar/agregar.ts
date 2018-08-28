import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { HttpClient } from "@angular/common/http";
import { Events } from "ionic-angular";

@Component({
  selector: 'page-agregar',
  templateUrl: 'agregar.html',
})
export class AgregarPage {

  item = {
    id: null,
    primerNombre:null,
    
  };

  constructor(public navCtrl: NavController, public navParams: NavParams, private http:HttpClient, 
    private events:Events) {
  }

  guardarProducto(){
     var fd = new FormData();
     fd.append('numExpediente', this.item.id);
     fd.append('nombre', this.item.primerNombre);
     
     
     this.http.post("http://localhost/api/pacientes.php?opcion=1", fd).subscribe(res => {
       if(res){
        this.navParams.get("parentPage").cargarInformacion();
        this.navCtrl.pop();
       }
     });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AgregarPage');
  }

}
