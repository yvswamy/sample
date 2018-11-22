import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-epmsales-execsummary',
  templateUrl: './epmsales-execsummary.component.html',
  styleUrls: ['./epmsales-execsummary.component.css']
})
export class EpmsalesExecsummaryComponent implements OnInit {
  tilesData = [
    {
      label: 'BUDGET',
      comparison: {
        '% yty': -4
      },
      value: 4670
    },
    {
      label: 'PPV',
      comparison: {
        '% yty': -6
      },
      value: 4596
    },
    {
      label: 'COV%',
      comparison: {
        ' pts wtw': '+1'
      },
      value: 98
    },
    {
      label: 'B/(W) OBJ',
      value: -75
    },
    {
      label: 'VP',
      comparison: {
        '% yty': -1,
        'M wtw': -291
      },
      value: 11246
    },
    {
      label: 'QP',
      comparison: {
        '% yty': -7,
        'M wtw': '+216'
      },
      value: 5733
    },
    {
      label: 'WSR',
      title: {
        'Data as of': 'November 19, 2018 ,10:11 PM UTC'
      },
      comparison: {
        'M Won RM': 771,
        'M Sol + Risk': 3469
      },
      value: 4239
    },
    {
      label: 'WON',
      title: {
        Pipeline: ''
      },
      comparison: {
        '% yty': -13,
        'M wtw': '+66'
      },
      value: 605
    }
  ];
  constructor() {}

  ngOnInit() {}
}
