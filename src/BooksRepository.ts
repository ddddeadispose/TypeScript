abstract class BooksRepository {
    abstract createBook(book: any): void;
    abstract getBook(id: string): any;
    abstract getBooks(): any[];
    abstract updateBook(id: string, updatedBook: any): void;
    abstract deleteBook(id: string): void;
}

export default BooksRepository;
