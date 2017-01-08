import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: "my-app",
  template: `
    <h1>{{title}}</h1>
    <nav>
      <a routerLink="/dashboard" routerLinkActive="active">Dashboard</a>
      <a routerLink="/heroes" routerlinkactive="active">Heroes</a>
    </nav>
    <router-outlet></router-outlet>
  `,
  styleUrls: ['app.component.css']
}) // End Component

export class AppComponent {
  title = 'Tour of Heroes';
} // End AppComponent
