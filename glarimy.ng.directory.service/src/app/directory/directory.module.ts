import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DirectoryComponent } from './directory.component';
import { DirectoryService } from '../directory.service';

@NgModule({
  imports: [
    CommonModule, BrowserModule, FormsModule
  ],
  declarations: [DirectoryComponent],
  bootstrap: [DirectoryComponent],
  providers: [DirectoryService]
})
export class DirectoryModule { }
