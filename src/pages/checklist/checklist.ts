import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';



@Component({
    selector: 'checklist-page',
    templateUrl: 'checklist.html'
})
export class Checklist
{

    constructor(public navCtrl: NavController)
    {
        //this.navCtrl.push(Cards);
    }

}
