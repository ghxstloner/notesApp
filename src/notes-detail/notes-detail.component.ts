import { Component, inject } from '@angular/core';
import { CommonModule, NgIf } from '@angular/common';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { NOTES } from 'src/notes';

@Component({
  selector: 'app-notes-detail',
  standalone: true,
  imports: [CommonModule, RouterModule, NgIf],
  templateUrl: './notes-detail.component.html',
  styleUrls: ['./notes-detail.component.css'],
})
export class NotesDetailComponent {
  router = inject(Router);
  activeRoute = inject(ActivatedRoute);
  id = Number(this.activeRoute.snapshot.paramMap.get('id'));
  note = NOTES.find((i) => i.id === this.id);
  deleteNote() {
    this.router.navigateByUrl('');
    if (this.note) {
      let delNote = NOTES.indexOf(this.note, 0);
      NOTES.splice(delNote, 1);
    }
  }
}
