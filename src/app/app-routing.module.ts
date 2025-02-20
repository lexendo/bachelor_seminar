import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AssignmentComponent } from './pages/assignment/assignment.component';
import { SourcesComponent } from './pages/sources/sources.component';
import { TextsComponent } from './pages/texts/texts.component';
import { DiaryComponent } from './pages/diary/diary.component';
import {ContactComponent} from './pages/contact/contact.component';

const routes: Routes = [
  { path: '', component: AssignmentComponent },
  { path: 'sources', component: SourcesComponent },
  { path: 'texts', component: TextsComponent },
  { path: 'diary', component: DiaryComponent },
  { path: 'contact', component: ContactComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
