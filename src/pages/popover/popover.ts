import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { AngularFireAuth } from 'angularfire2/auth';
import { User } from 'firebase';

/**
 * Generated class for the PopoverPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-popover',
  templateUrl: 'popover.html',
})
export class PopoverPage {

  private usuario:User;

  constructor(public navCtrl: NavController, public navParams: NavParams, private auth:AngularFireAuth) {
    this.usuario = null;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PopoverPage');
    this.auth.user.subscribe((usuario) => {
      if (usuario !== undefined) {
        this.usuario = usuario;
      }
    });
  }

  UserLogout(){
  	this.auth.auth.signOut().then(() => {
      this.navCtrl.popAll();
    });
    
  }

}
