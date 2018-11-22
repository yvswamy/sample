import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-epmsales-tilesummary',
  templateUrl: './epmsales-tilesummary.component.html',
  styleUrls: ['./epmsales-tilesummary.component.css']
})
export class EpmsalesTilesummaryComponent implements OnInit {
  tilesDataToRender;

  constructor() {}

  ngOnInit() {
    this.tilesData = [
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
  }

  set tilesData(tilesData) {
    if (tilesData.length !== 0) {
      this.prepareTiles(tilesData);
    }
  }
  prepareTiles(tilesData) {
    console.log(tilesData);
    const formatter = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0
    });

    this.tilesDataToRender = [];
    for (let i = 0; i < tilesData.length; i++) {
      this.tilesDataToRender[i] = {};
      this.tilesDataToRender[i]['label'] = tilesData[i]['label'];
      const value = tilesData[i]['value'];
      if (
        tilesData[i]['label'] === 'COV%' ||
        tilesData[i]['label'] === 'PPV Penetration of Total PPV %' ||
        tilesData[i]['label'] === 'VP Penetration of Total VP %' ||
        tilesData[i]['label'] === 'WON Penetration of Total WON %'
      ) {
        this.tilesDataToRender[i]['value'] = formatter.format(value);
        if (this.tilesDataToRender[i]['value'] !== 'N/A') {
          this.tilesDataToRender[i]['value'] = this.tilesDataToRender[i][
            'value'
          ].substr(1);
        }
      } else {
        this.tilesDataToRender[i]['value'] = formatter.format(value);
      }

      if (tilesData[i]['showPointer'] === true) {
        this.tilesDataToRender[i]['showPointer'] = tilesData[i]['showPointer'];
      }

      if (
        (tilesData[i]['label'] === 'COV%' && tilesData[i]['value'] < 100) ||
        (tilesData[i]['label'] !== 'COV%' && tilesData[i]['value'] < 0)
      ) {
        this.tilesDataToRender[i]['changeColor'] = true;
      }

      if (tilesData[i].title) {
        const titleKeys: any[] = Object.keys(tilesData[i]['title']);
        let titleString = '';
        titleKeys.forEach(title => {
          if (tilesData[i]['title'][title] !== '') {
            titleString += title + ' ' + tilesData[i]['title'][title];
          } else {
            titleString += title;
          }
        });
        this.tilesDataToRender[i]['title'] = '(' + titleString + ')';
      } else {
        this.tilesDataToRender[i]['setPadding'] = true;
      }

      if (tilesData[i].comparison) {
        const comparisonTo: any[] = Object.keys(tilesData[i].comparison);
        let comparisonString = '';
        for (let j = 0; j < comparisonTo.length; j++) {
          if (tilesData[i].comparison[comparisonTo[j]] === 'N/A') {
            comparisonString +=
              tilesData[i].comparison[comparisonTo[j]] +
              comparisonTo[j].replace('%', '');
          } else {
            const data =
              (tilesData[i].comparison[comparisonTo[j]] >= 0 ? '+$' : '-$') +
              Math.abs(tilesData[i].comparison[comparisonTo[j]]);
            comparisonString +=
              comparisonTo[j].indexOf('M') === 0
                ? data
                : formatter.format(comparisonTo[j]);
          }
          if (j !== comparisonTo.length - 1) {
            comparisonString += ', ';
          }
        }
        this.tilesDataToRender[i].comparison = comparisonString;
      }
    }
  }
}
