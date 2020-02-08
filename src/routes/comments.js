import express from 'express';
import { commentsController } from '../controllers';

const router = express.Router();

router.get('/', commentsController.list);
router.get('/:id', commentsController.find);
router.post('/', commentsController.create);
router.put('/:id', commentsController.update);
router.delete('/:id', commentsController.del);

export default router;
