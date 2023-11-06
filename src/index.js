import { Router } from 'express';
import container from './container.js';
import BooksRepository from './BooksRepository';

const router = Router();

router.get('/:id', async (req, res, next) => {
    try {
        const repo = container.get<BooksRepository>(BooksRepository);
        const book = await repo.getBook(req.params.id);
        if (book) {
            res.json(book);
        } else {
            res.status(404).json({ message: 'Книга не найдена' });
        }
    } catch (error) {
        next(error); // Обрабатываем ошибки
    }
});

export default router;
