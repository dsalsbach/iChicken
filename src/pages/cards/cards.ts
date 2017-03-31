import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-cards',
  templateUrl: 'cards.html'
})
export class CardsPage {

  data: Array<{
  title: string, 
  details: string, 
  merk: string, 
  volgnr: string, 
  type: string, 
  artikel: string, 
  icon: string, 
  showDetails: 
  boolean}> = [];

  constructor(public navCtrl: NavController) {
      this.data.push({
          title: 'Details ',
          details: 'Merk',
          merk: 'Epson emp-1707',
          volgnr: '666',
          type: 'Stan',
          artikel: 'H3LL',
          icon: 'md-add',
          showDetails: false
          
        });
  }

  toggleDetails(data) {
    if (data.showDetails) {
        data.showDetails = false;
        data.icon = 'md-add';
    } else {
        data.showDetails = true;
        data.icon = 'md-remove';
    }
  }

}