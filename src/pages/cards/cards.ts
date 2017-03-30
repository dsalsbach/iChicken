import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

import { Checklist} from '../checklist/checklist'

@Component({
    selector: 'cards',
    templateUrl: 'cards.html'
})
export class Cards
{

    constructor(public navCtrl: NavController)
    {
        this.navCtrl.push(Checklist);
    }

}
