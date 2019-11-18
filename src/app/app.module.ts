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

import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';
import {FormsModule} from '@angular/forms';
import { ReadComponent } from './read/read.component';


@NgModule({
  declarations: [
    AppComponent,
    CreateComponent,
    EditComponent,
    ReadComponent
  ],
  imports: [
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
