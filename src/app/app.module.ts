import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { RequiredValidator } from './required.validator';

@NgModule({
  imports: [ 
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule ,
    MatFormFieldModule,
    MatInputModule
  ],
  declarations: [
    AppComponent, 
    HelloComponent,
    RequiredValidator
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
