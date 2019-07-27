import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1 class="app-title">
      Welcome to {{ title }}!
    </h1>

    <app-list-manager></app-list-manager>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'My To Do List';

  ngOnInit() {
    setTimeout(() => {
      this.title = 'My Nightmare List of Stuff I\'ll never get done';
    }, 10000);
  }
  
}
