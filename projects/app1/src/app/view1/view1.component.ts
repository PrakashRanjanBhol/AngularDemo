import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-view1',
  templateUrl: './view1.component.html',
  styleUrls: ['./view1.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class View1Component implements OnInit {

  cities: any[];
  selectedCity: any;

  constructor() { }

  ngOnInit() {
    this.cities = [
      {name: 'New York', code: 'NY'},
      {name: 'Rome', code: 'RM'},
      {name: 'London', code: 'LDN'},
      {name: 'Istanbul', code: 'IST'},
      {name: 'Paris', code: 'PRS'}
  ];
  }

}
