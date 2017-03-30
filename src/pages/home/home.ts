import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

import { CardsPage } from '../pages/cards/cards';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {
    navCtrl.push(CardsPage);
  }

}
