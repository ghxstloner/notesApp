import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { NotesListComponent } from 'src/notes-list/notes-list.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  imports: [NotesListComponent, HeaderComponent, FormsModule],
})
export class AppComponent {
  showName() {
    alert(this.name);
  }

  title: any;
  name = 'Name';
}
