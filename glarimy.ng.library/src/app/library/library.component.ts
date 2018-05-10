import { Component } from '@angular/core';
import { LibraryService } from './library.LibraryService';
import { Book } from './library.Book';

@Component({
  selector: 'library',
  templateUrl: './library.component.html',
  styleUrls: ['./library.component.css']
})
export class LibraryComponent {
  isbn: number;
  title: string;
  author: string;
  book: Book;
  books: Book[];
  showForm = false;
  showDetails = false;

  constructor() {
    this.books = [];
  }

  showAddForm() {
    this.showForm = true;
    this.showDetails = false;
  }

  add() {
    this.showForm = false;
    this.showDetails = false;
    this.books.push(new Book(this.isbn, this.title, this.author));
  }

  view(isbn: number) {
    this.showForm = false;
    this.showDetails = true;
    const book: Book = this.books.find(b => b.isbn == isbn);
    this.isbn = book.isbn;
    this.title = book.title;
    this.author = book.author;
  }

  remove(isbn: number) {
    this.showForm = false;
    this.showDetails = false;
    for (let i = 0; i < this.books.length; i++) {
      if (this.books[i].isbn == isbn) {
        this.books.splice(i, 1);
      }
    }
  }
}
