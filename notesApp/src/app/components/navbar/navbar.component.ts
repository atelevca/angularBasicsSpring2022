import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  template: ` <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
      <a class="navbar-brand" [routerLink]="label === 'NOTES' ? '/' : label | lowercase" *ngFor="let label of labels">
        {{label}}
      </a>
    </div>
  </nav>`,
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  public labels: string[] = ['NOTES', 'BOOKS'];
}
