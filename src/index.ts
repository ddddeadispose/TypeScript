import { Router } from 'express';
import container from './container.ts';
import BooksRepository from './BooksRepository';

const router = Router();

router.get('/:id', async (req, res, next) => {
    try {
        const repo = container.get<BooksRepository>(BooksRepository);
        const book = await repo.getBook(req.params.id);
        if (book) {
            await res.json(book);
        } else {
            await res.status(404).json({message: 'Книга не найдена'});
        }
    } catch (error) {
        next(error); // Обрабатываем ошибки
    }
});

export default router;
