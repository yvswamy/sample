import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-epmsales-tilesummary',
  templateUrl: './epmsales-tilesummary.component.html',
  styleUrls: ['./epmsales-tilesummary.component.css']
})
export class EpmsalesTilesummaryComponent implements OnInit {
  @Input()
  tilesData: [{}];
  tilesDataToRender;

  constructor() {}

  ngOnInit() {
    this.prepareTiles(this.tilesData);
  }

  prepareTiles(tilesData) {
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
        tilesData[i]['label'].length > 12
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
              comparisonTo[j].indexOf('M') === 0 ? data : comparisonTo[j];
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
