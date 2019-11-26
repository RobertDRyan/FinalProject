import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatInputModule,
  MatCardModule,
  MatButtonModule,
  MatToolbarModule,
  MatExpansionModule,
  
  } from '@angular/material';

// // MDB Angular Pro
// import { ButtonsModule, WavesModule, CollapseModule } from 'ng-uikit-pro-standard'

  // MDB Angular Pro
import { ButtonsModule, WavesModule, CollapseModule } from 'angular-bootstrap-md';

import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';
import {FormsModule} from '@angular/forms';
import { ReadComponent } from './read/read.component';
import { HomeComponent } from './home/home.component';
import { SearchComponent } from './search/search.component';


@NgModule({
  declarations: [
    AppComponent,
    CreateComponent,
    EditComponent,
    ReadComponent,
    HomeComponent,
    SearchComponent
  ],
  imports: [
    ButtonsModule,
    WavesModule,
    CollapseModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatCardModule,
MatButtonModule,
MatToolbarModule,
MatExpansionModule,
BrowserAnimationsModule,
MatInputModule,
FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
