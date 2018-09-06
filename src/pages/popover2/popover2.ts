import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { SccamProvider } from '../../providers/sccam/sccam';

/**
 * Generated class for the Popover2Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-popover2',
  templateUrl: 'popover2.html',
})
export class Popover2Page {
private ipServer:string;
  constructor(public navCtrl: NavController, public navParams: NavParams, private provider:SccamProvider) {

  }

GuardarIp(){
this.provider.GuardarServerIp(this.ipServer);
}


  ionViewDidLoad() {
   this.ipServer=this.provider.GetServerIp();
  }

}
