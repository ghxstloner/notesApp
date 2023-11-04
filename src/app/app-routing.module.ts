import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddNoteComponent } from 'src/add-note/add-note.component';
import { NotesDetailComponent } from 'src/notes-detail/notes-detail.component';
import { NotesListComponent } from 'src/notes-list/notes-list.component';
const routes: Routes = [
  { path: '', component: NotesListComponent },
  { path: 'new', component: AddNoteComponent },
  { path: 'note/:id', component: NotesDetailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
