import {Component, OnInit} from '@angular/core';
import * as localForage from 'localforage';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

    constructor() {
        localForage.config({
            name        : 'lapcounter',
            version     : 1.0,
            storeName   : 'lapcounter', // Should be alphanumeric, with underscores.
            description : 'Saves the laps and such of the app'
        });
    }

    ngOnInit() {}

}
