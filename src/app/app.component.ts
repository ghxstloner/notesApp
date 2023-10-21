import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { NotesListComponent } from 'src/notes-list/notes-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  imports: [NotesListComponent, HeaderComponent],
})
export class AppComponent {
  title: any;
}
