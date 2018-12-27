import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-epmsales-profilepage',
  templateUrl: './epmsales-profilepage.component.html',
  styleUrls: ['./epmsales-profilepage.component.css']
})
export class EpmsalesProfilepageComponent implements OnInit {
  cities = ['Hyderabad', 'Bombay', 'Chennai', 'Delhi'];
  selectedCity = 'Hyderabad';
  constructor() { }

  ngOnInit() {
  }

}
