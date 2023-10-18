import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  template: `<h1>{{ title }}</h1>`,
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  title = 'My notes';
}
