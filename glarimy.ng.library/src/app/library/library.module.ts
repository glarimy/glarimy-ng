import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { LibraryComponent } from './library.component';

@NgModule({
  declarations: [
    LibraryComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    BrowserModule
  ],
  providers: [],
  bootstrap: [LibraryComponent]
})
export class LibraryModule { }
