import { Component } from '@angular/core';
import { CarbonSnippetModule } from '@cccc/angular-carbon-components';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'epm-sales';

  appNavigation(navItem: string) {
    console.log(navItem);
  }
}
