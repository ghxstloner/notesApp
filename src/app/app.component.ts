import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { NotesListComponent } from 'src/notes-list/notes-list.component';
import { AddNoteComponent } from 'src/add-note/add-note.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  imports: [NotesListComponent, HeaderComponent, AddNoteComponent, RouterModule],
})
export class AppComponent {
}
