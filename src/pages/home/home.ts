import { Component } from '@angular/core';
import { NavController, PopoverController } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { PopoverPage } from '../../pages/popover/popover';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

	private usuario:any;

  constructor(public navCtrl: NavController, private popoverCtrl:PopoverController, private auth:AngularFireAuth) {

  }

  ionViewDidLoad(){
  	this.LoadAuthState();
  }

  MenuUsuario(evento:Event){
  	this.popoverCtrl.create(PopoverPage).present({ev:evento});
  }

  LoadAuthState(){
    
      this.auth.user.subscribe((usuario) => {
        console.log(usuario);
        if(usuario !== null){
          this.usuario = usuario;
        }
      });
    
  }

}

