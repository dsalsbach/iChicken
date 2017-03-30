import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

import { Cards } from '../cards/cards';

import { Checklist } from '../checklist/checklist';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {
      this.navCtrl.push(Checklist);
  }

}
