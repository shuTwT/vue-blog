import Router from '@koa/router';

import AuthController from './controllers/auth';
import UserController from './controllers/user';
import ViewController from './controllers/view';

const router = new Router();
router.get('/', ViewController.indexView)
// auth 相关的路由
router.post('/auth/login', AuthController.login);
router.post('/auth/register', AuthController.register);

// users 相关的路由
router.get('/users', UserController.listUsers);
router.get('/users/:id', UserController.showUserDetail);
router.put('/users/:id', UserController.updateUser);
router.delete('/users/:id', UserController.deleteUser);

export default router;