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
import {MatListItem, MatNavList} from '@angular/material/list';

@NgModule({
  declarations: [
    AppComponent,
    AssignmentComponent,
    SourcesComponent,
    TextsComponent,
    DiaryComponent
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
    MatListItem
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
