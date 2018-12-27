import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'epm-sales';
  constructor(private route: ActivatedRoute, private router: Router) {}

  appNavigation(navItem: string) {
    console.log(navItem);
    this.router.navigate([`/${navItem}`]);
  }
}
