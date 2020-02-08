import express from 'express';

import users from './users';
import comments from './comments';
import post from './post';

const routes = express.Router();

routes.use('/users', users);
routes.use('/comments', comments);
routes.use('/post', post);

export default routes;
