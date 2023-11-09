import 'mongoose'
import { Schema } from 'mongoose';

// Определение схемы книги
const bookSchema = new Schema({
    id: String,
    title: String,
    description: String,
    authors: String,
    favorite: String,
    fileCover: String,
    fileName: String,
    fileBook: String,
})

module.exports = bookSchema