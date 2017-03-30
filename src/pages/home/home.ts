import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

import { Cards } from '../cards/cards';

import { BarcodeScanner } from 'ionic-native';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {
      BarcodeScanner.scan({formats:"QR_CODE"}).then((barcodeData) => {
       // Success! Barcode data is here
       //verify barcode data
       this.navCtrl.push(CardsPage);
      }, (err) => {
          // An error occurred
      });
    }
}
