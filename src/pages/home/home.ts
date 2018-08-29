import { Component } from '@angular/core';
import { NavController, PopoverController, Popover } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { PopoverPage } from '../../pages/popover/popover';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

	private usuario:any;
	private popover:Popover;

  constructor(public navCtrl: NavController, private popoverCtrl:PopoverController, private auth:AngularFireAuth) {

  }

  ionViewWillEnter(){
  	this.LoadAuthState();
  }

  ionViewDidLoad(){
  	
  }

  MenuUsuario(evento:Event){
  	if(this.usuario !== null){
  		this.popover = this.popoverCtrl.create(PopoverPage);
  		this.popover.present({ev:evento});
  	}
  }

  LoadAuthState(){
      this.auth.user.subscribe((usuario) => {
        console.log(usuario);
        if(usuario !== null){
          this.usuario = usuario;
        }else{
        	this.usuario = null;
        }
      });
    
  }

}

