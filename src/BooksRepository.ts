import { Router } from 'express';
import container from './container.js';

abstract class BooksRepository {
    abstract createBook(book: Record<string, any>): Promise<void>;
    abstract getBook(id: string): Promise<Record<string, any> | null>;
    abstract getBooks(): Promise<Record<string, any>[]>;
    abstract updateBook(id: string, updatedBook: Record<string, any>): Promise<void>;
    abstract deleteBook(id: string): Promise<void>;
}

export default BooksRepository;
