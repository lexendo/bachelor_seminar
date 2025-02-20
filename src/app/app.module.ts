import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { AssignmentComponent } from './pages/assignment/assignment.component';
import { SourcesComponent } from './pages/sources/sources.component';
import { TextsComponent } from './pages/texts/texts.component';
import { DiaryComponent } from './pages/diary/diary.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatTab, MatTabGroup} from '@angular/material/tabs';
import {MatSidenav, MatSidenavContainer, MatSidenavContent} from '@angular/material/sidenav';
import {MatList, MatListItem, MatNavList} from '@angular/material/list';
import {MatIcon} from '@angular/material/icon';
import {
  MatCell, MatCellDef,
  MatColumnDef,
  MatHeaderCell, MatHeaderCellDef,
  MatHeaderRow,
  MatHeaderRowDef,
  MatRow,
  MatRowDef,
  MatTable
} from '@angular/material/table';
import {NgOptimizedImage} from '@angular/common';
import { ContactComponent } from './pages/contact/contact.component';
import {MatFormField, MatFormFieldModule, MatLabel} from '@angular/material/form-field';
import {MatInput, MatInputModule} from '@angular/material/input';
import {FormsModule} from '@angular/forms';
import {MatChip} from "@angular/material/chips";
import {MatButtonToggle, MatButtonToggleGroup} from '@angular/material/button-toggle';

@NgModule({
  declarations: [
    AppComponent,
    AssignmentComponent,
    SourcesComponent,
    TextsComponent,
    DiaryComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    AppRoutingModule,
    MatTab,
    MatTabGroup,
    MatSidenavContent,
    MatNavList,
    MatSidenav,
    MatSidenavContainer,
    MatListItem,
    MatIcon,
    MatList,
    MatTable,
    MatHeaderCell,
    MatColumnDef,
    MatHeaderRow,
    MatRow,
    MatCell,
    MatRowDef,
    MatHeaderRowDef,
    MatCellDef,
    MatHeaderCellDef,
    NgOptimizedImage,
    MatFormField,
    MatInput,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatChip,
    MatButtonToggle,
    MatButtonToggleGroup
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
