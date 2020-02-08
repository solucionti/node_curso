import express from 'express';
import { postController } from '../controllers';

const router = express.Router();

router.get('/', postController.list);
router.get('/:id', postController.find);
router.post('/', postController.create);
router.put('/:id', postController.update);
router.delete('/:id', postController.del);

export default router;
