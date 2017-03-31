@Component({
﻿import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';



@Component({
    selector: 'checklist-page',
    templateUrl: 'checklist.html'
})
export class ChecklistPage
{

    constructor(public navCtrl: NavController)
    {        
    }

    items = [
        'Vervangen projector lamp',
        'Calibreren lens',
        'Vervangen batterijen',
        'Billen vegen',
        'Poten afstellen',
        'Configureren resoluties'
    ];

    itemSelected(item: string) {
        console.log("Selected Item", item);
    }

}
