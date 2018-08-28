import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { HomePage } from '../home/home';
import { MedicosPage } from '../medicos/medicos';
import { AgendaPage } from '../agenda/agenda';
import { ExpedientePage } from '../expediente/expediente';
import { LoginPage } from '../login/login';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab4Root = MedicosPage;
  tab5Root = AgendaPage;
  tab6Root = ExpedientePage;


  constructor(private navCtrl:NavController) {
  	
  }

  ionViewDidLoad(){
    
  }
  
}
