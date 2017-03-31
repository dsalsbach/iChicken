import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

import { CardsPage } from '../cards/cards';

import { BarcodeScanner } from 'ionic-native';

@Component({
    selector: 'page-home',
    templateUrl: 'home.html'
})
export class HomePage
{

    constructor(public navCtrl: NavController)
    {

    }

    loadBarcodeScanner()
    {
        BarcodeScanner.scan({
            formats: "QR_CODE"
        })
            .then((result) =>
            {
                if (!result.cancelled)
                {
                    this.navCtrl.push(CardsPage, {
                        QRData: result.text
                    });
                }
            })
            .catch((err) =>
            {
                alert(err);
            });
    }

    ionViewWillEnter()
    {
        this.loadBarcodeScanner();
    }
}