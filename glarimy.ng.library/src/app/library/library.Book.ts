export class Book {
    isbn: number;
    title: string;
    author: string;

    constructor(isbn: number, title: string, author: string) {
        this.isbn = isbn;
        this.title = title;
        this.author = author;
    }
}
