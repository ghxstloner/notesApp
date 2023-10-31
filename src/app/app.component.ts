import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { NotesListComponent } from 'src/notes-list/notes-list.component';
import { FormsModule } from '@angular/forms';
import { AddNoteComponent } from 'src/add-note/add-note.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  imports: [NotesListComponent, HeaderComponent, FormsModule, AddNoteComponent],
})
export class AppComponent {
  showName() {
    alert(this.name);
  }

  title: any;
  name = 'Name';
}
