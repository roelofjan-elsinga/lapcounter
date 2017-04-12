import {Component, OnInit} from '@angular/core';
import * as localForage from 'localforage';

@Component({
    selector: 'counter',
    templateUrl: './counter.component.html',
    styleUrls: ['./counter.component.scss']
})
export class CounterComponent implements OnInit {

    lapsPerUnit: number = 0;
    laps: number = 0;
    time: string;
    unit: string = 'km';
    distance: number = 0;

    constructor() {

    }

    increase() {
        this.laps++;
        this.persist();
    }

    decrease() {
        if(this.laps > 0)
            this.laps--;
        this.persist();
    }

    distanceInMetric() : number {
        if(this.unit == 'km')
            return this.laps / this.lapsPerUnit;
        else
            return parseFloat(this.fromImperialToMetric(this.laps / this.lapsPerUnit));
    }

    distanceInImperial() : number {
        if(this.unit == 'mi')
            return this.laps / this.lapsPerUnit;
        else
            return parseFloat(this.fromMetricToImperial(this.laps / this.lapsPerUnit));
    }

    fromMetricToImperial(value) {
        return (parseFloat(value) * 0.62137119223733).toFixed(2);
    }

    fromImperialToMetric(value) {
        return (parseFloat(value) * 1.609344).toFixed(2);
    }

    persist() {
        localForage.setItem('laps', this.laps);
        localForage.setItem('lapsPerUnit', this.lapsPerUnit);
        localForage.setItem('unit', this.unit);
    }

    reset() {
        localForage.clear();
        this.laps = 0;
        this.lapsPerUnit = 0;
        this.unit = 'km';
    }

    ngOnInit() {
        localForage.getItem('laps')
            .then(laps => {
                if(laps != null) {
                    this.laps = parseFloat(<string>laps);
                }
            });

        localForage.getItem('lapsPerUnit')
            .then(lapsPerUnit => {
                if(lapsPerUnit != null) {
                    this.lapsPerUnit = parseFloat(<string>lapsPerUnit);
                }
            });

        localForage.getItem('unit')
            .then(unit => {
                if(unit != null) {
                    this.unit = <string>unit;
                }
            });
    }

}
