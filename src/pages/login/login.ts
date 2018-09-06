import { Component, Input } from '@angular/core';
import  {NgForm,FormGroup,FormControl} from '@angular/forms';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';

import {AngularFireAuth} from 'angularfire2/auth';
import{TabsPage} from '../../pages/tabs/tabs';


/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

	private nombreusuario:string;
  private contrasena:string;

  constructor(public navCtrl: NavController, public navParams: NavParams,private auth:AngularFireAuth,private toastCtrl:ToastController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  Validar(){
  	
  let that=this;
  this.auth.auth.signInWithEmailAndPassword(this.nombreusuario, this.contrasena).then(function(credenciales){
    that.Cerrar();
    
  }).catch((error)=>
  {let errorCode=error.code;
    let mensaje:string='';
   switch(errorCode){
     case "auth/invalid-email":
     mensaje="El correo no es valido";
     break;
     case "auth/user-not-found":
     mensaje='El usuario no existe';
     break;
     case "auth/wrong-password":
     mensaje='contrasena invalidad';
     break;
     default:
     mensaje='Acceso Denegado';
     break;

   }
   let toast = this.toastCtrl.create({
     message:mensaje,
     duration:3000,
     position:'bottom'
   });

   toast.present();
  });
}

Cerrar(){
  this.navCtrl.setRoot(TabsPage);
  }


}
