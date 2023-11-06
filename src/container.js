// container.js
import 'reflect-metadata';
import { Container } from 'inversify';
import BooksRepository from './BooksRepository';

const container = new Container();

container.bind(BooksRepository).toSelf();

export default container;
