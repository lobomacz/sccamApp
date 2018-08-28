import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { auth } from 'firebase';

import { HomePage } from '../home/home';
import { MedicosPage } from '../medicos/medicos';
import { AgendaPage } from '../agenda/agenda';
import { ExpedientePage } from '../expediente/expediente';
import { LoginPage } from '../login/login';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

	private usuario:any;

  tab1Root = HomePage;
  tab4Root = MedicosPage;
  tab5Root = AgendaPage;
  tab6Root = ExpedientePage;


  constructor(private navCtrl:NavController, private navParams:NavParams, private auth:AngularFireAuth) {
  	
  }

  ionViewDidLoad(){
    console.log('ionViewDidLoad tabs');
  }

  ionViewWillEnter(){
    console.log('ionViewWillEnter tabs');

    this.LoadAuthState();
    if(this.usuario === null){
      this.AbreLogin();
    }
  	
  }

  AbreLogin(){
    this.navCtrl.push(LoginPage);
  }

  LoadAuthState(){
    console.log('Into LoadAuthState');
    
      this.auth.user.subscribe((usuario) => {
        console.log(usuario);
        if(usuario === null){
          this.AbreLogin();
        }else{
          this.usuario = usuario;
        }
      });
    
  }
}
