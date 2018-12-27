import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-epmsales-breadcrumb',
  templateUrl: './epmsales-breadcrumb.component.html',
  styleUrls: ['./epmsales-breadcrumb.component.css']
})
export class EpmsalesBreadcrumbComponent implements OnInit {
  cities = ['Hyderabad', 'Bombay', 'Chennai', 'Delhi'];
  selectedCity = 'CQ';
  constructor() {}

  ngOnInit() {}
}
