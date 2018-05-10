import {Book} from './library.Book';

export class LibraryService {
    private books: Book[];

    constructor() {
        this.books = [];
    }
    add(book: Book) {
        this.books.push(book);
    }

    list(): Book[] {
        return this.books;
    }

    find(isbn: number): Book {
        return this.books.find(b => b.isbn == isbn);
    }

    remove(isbn: number) {
        for (let i = 0; i < this.books.length; i++) {
            if (this.books[i].isbn == isbn) {
                this.books.splice(i, 1);
            }
        }
    }
}
